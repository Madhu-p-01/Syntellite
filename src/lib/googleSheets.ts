import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

export interface ContactFormData {
  name: string;
  email: string;
  project: string;
  message: string;
  timestamp?: string;
}

class GoogleSheetsService {
  private doc: GoogleSpreadsheet | null = null;
  private isInitialized = false;

  private async initialize() {
    if (this.isInitialized) return;

    // Check if Google Sheets is configured
    const sheetId = import.meta.env.VITE_GOOGLE_SHEET_ID;
    const serviceEmail = import.meta.env.VITE_GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const privateKey = import.meta.env.VITE_GOOGLE_PRIVATE_KEY;

    if (!sheetId || !serviceEmail || !privateKey || 
        sheetId === 'your_sheet_id_here' || 
        serviceEmail === 'your_service_account_email_here' || 
        privateKey === 'your_private_key_here') {
      throw new Error('Google Sheets not configured. Please follow GOOGLE_SHEETS_SETUP.md');
    }

    try {
      const serviceAccountAuth = new JWT({
        email: serviceEmail,
        key: privateKey.replace(/\\n/g, '\n'),
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });

      this.doc = new GoogleSpreadsheet(sheetId, serviceAccountAuth);

      await this.doc.loadInfo();
      this.isInitialized = true;
    } catch (error) {
      console.error('Failed to initialize Google Sheets:', error);
      throw new Error('Google Sheets initialization failed');
    }
  }

  async submitContactForm(data: ContactFormData): Promise<boolean> {
    try {
      await this.initialize();
      
      if (!this.doc) {
        throw new Error('Google Sheets document not initialized');
      }

      // Get the first sheet or create one if it doesn't exist
      let sheet = this.doc.sheetsByIndex[0];
      
      if (!sheet) {
        sheet = await this.doc.addSheet({
          title: 'Contact Form Submissions',
          headerValues: ['Timestamp', 'Name', 'Email', 'Project Type', 'Message', 'Status']
        });
      }

      // Check if headers exist, if not add them
      const rows = await sheet.getRows();
      if (rows.length === 0) {
        await sheet.setHeaderRow(['Timestamp', 'Name', 'Email', 'Project Type', 'Message', 'Status']);
      }

      // Add the new submission
      await sheet.addRow({
        'Timestamp': new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        'Name': data.name,
        'Email': data.email,
        'Project Type': data.project,
        'Message': data.message,
        'Status': 'New'
      });

      return true;
    } catch (error) {
      console.error('Error submitting to Google Sheets:', error);
      return false;
    }
  }

  async getSubmissions(): Promise<ContactFormData[]> {
    try {
      await this.initialize();
      
      if (!this.doc) {
        throw new Error('Google Sheets document not initialized');
      }

      const sheet = this.doc.sheetsByIndex[0];
      if (!sheet) return [];

      const rows = await sheet.getRows();
      
      return rows.map((row: any) => ({
        timestamp: row.get('Timestamp'),
        name: row.get('Name'),
        email: row.get('Email'),
        project: row.get('Project Type'),
        message: row.get('Message')
      }));
    } catch (error) {
      console.error('Error fetching submissions:', error);
      return [];
    }
  }
}

export const googleSheetsService = new GoogleSheetsService();
