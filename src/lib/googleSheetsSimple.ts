export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  project: string;
  message: string;
  timestamp?: string;
}

class SimpleGoogleSheetsService {
  private scriptUrl: string;

  constructor() {
    // This will be a Google Apps Script Web App URL
    this.scriptUrl = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL || '';
  }

  async submitContactForm(data: ContactFormData): Promise<boolean> {
    // Check if Google Apps Script URL is configured
    if (!this.scriptUrl || this.scriptUrl === 'your_google_apps_script_url_here') {
      console.warn('Google Apps Script not configured. Form data logged to console for development.');
      console.log('Form submission data:', {
        ...data,
        timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
      });
      return true; // Return true for development
    }

    try {
      const response = await fetch(this.scriptUrl, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
        })
      });

      // Note: With no-cors mode, we can't read the response
      // We assume success if no error is thrown
      return true;
    } catch (error) {
      console.error('Error submitting to Google Sheets:', error);
      return false;
    }
  }

  // Fallback method using a simple webhook service
  async submitToWebhook(data: ContactFormData): Promise<boolean> {
    const webhookUrl = import.meta.env.VITE_WEBHOOK_URL;
    
    if (!webhookUrl || webhookUrl === 'your_webhook_url_here') {
      console.warn('Webhook not configured. Form data logged to console for development.');
      console.log('Form submission data:', {
        ...data,
        timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
      });
      return true;
    }

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
        })
      });

      return response.ok;
    } catch (error) {
      console.error('Error submitting to webhook:', error);
      return false;
    }
  }
}

export const simpleGoogleSheetsService = new SimpleGoogleSheetsService();
