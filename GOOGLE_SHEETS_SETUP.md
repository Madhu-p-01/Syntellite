# Google Sheets Integration Setup Guide (Simple Method)

This guide will help you set up Google Sheets integration for your contact form using Google Apps Script - a much simpler approach that works perfectly in the browser.

## Prerequisites

- Google account
- Your Syntellite project

## Method 1: Google Apps Script (Recommended)

This is the easiest and most reliable method for browser-based applications.

### Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new blank spreadsheet
3. Name it "Syntellite Contact Form Submissions"
4. Add headers in the first row:
   - A1: `Timestamp`
   - B1: `Name`
   - C1: `Email`
   - D1: `Project Type`
   - E1: `Message`
   - F1: `Status`

### Step 2: Create Google Apps Script

1. In your Google Sheet, go to `Extensions` → `Apps Script`
2. Delete the default code and paste this script:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSheet();

    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);

    // Add a new row with the form data
    sheet.appendRow([
      data.timestamp ||
        new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      data.name || "",
      data.email || "",
      data.project || "",
      data.message || "",
      "New",
    ]);

    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({ success: true })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({ message: "Contact form endpoint is working!" })
  ).setMimeType(ContentService.MimeType.JSON);
}
```

3. Save the script (Ctrl+S or Cmd+S)
4. Name your project: "Syntellite Contact Form Handler"

### Step 3: Deploy the Script

1. Click the "Deploy" button (top right)
2. Choose "New deployment"
3. Click the gear icon next to "Type" and select "Web app"
4. Configure the deployment:
   - **Description**: "Contact form handler v1"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone"
5. Click "Deploy"
6. **Copy the Web app URL** - you'll need this for your .env file
7. Click "Done"

### Step 4: Update Environment Variables

Add the Web app URL to your `.env` file:

```env
VITE_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

Replace `YOUR_SCRIPT_ID` with the actual URL you copied.

### Step 5: Test the Integration

1. Start your development server:

   ```bash
   npm run dev
   ```

2. Navigate to `/contact` page
3. Fill out and submit the form
4. Check your Google Sheet - you should see the submission!

## Method 2: Webhook Services (Alternative)

If you prefer using a webhook service like Zapier, Make.com, or n8n:

### Using Zapier:

1. Create a Zapier account
2. Create a new Zap with "Webhooks by Zapier" as trigger
3. Choose "Catch Hook" and copy the webhook URL
4. Set up Google Sheets as the action
5. Map the form fields to sheet columns
6. Add the webhook URL to your `.env`:
   ```env
   VITE_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/YOUR_WEBHOOK_ID/
   ```

### Using Make.com (formerly Integromat):

1. Create a Make.com account
2. Create a new scenario with HTTP webhook
3. Add Google Sheets module as action
4. Configure field mapping
5. Add the webhook URL to your `.env`

## Troubleshooting

### Common Issues:

1. **"Script function not found"**

   - Make sure you saved the script before deploying
   - Verify the function name is exactly `doPost`

2. **"Permission denied"**

   - Ensure the script is deployed with "Anyone" access
   - Check that the Google Sheet is accessible

3. **Form submits but no data appears**

   - Check the browser console for errors
   - Verify the Apps Script URL is correct
   - Test the script URL directly in browser

4. **CORS errors**
   - This is normal with Google Apps Script
   - The form uses `no-cors` mode which is expected

### Testing Your Apps Script:

You can test your script directly by visiting the URL in your browser. You should see:

```json
{ "message": "Contact form endpoint is working!" }
```

### Debugging:

1. Open Google Apps Script editor
2. Go to "Executions" tab to see logs
3. Check for any error messages
4. Use `console.log()` in your script for debugging

## Security Notes

- ✅ No API keys or sensitive credentials needed
- ✅ Google handles authentication automatically
- ✅ Script runs in Google's secure environment
- ✅ Data stays within your Google account

## Production Deployment

For production:

1. The same Apps Script URL works for both development and production
2. No additional configuration needed
3. Consider creating a separate Google Sheet for production data
4. You can create multiple deployments for different environments

## Advanced Features

### Email Notifications:

Add this to your Apps Script to get email notifications:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    // Add row to sheet
    sheet.appendRow([
      data.timestamp ||
        new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      data.name || "",
      data.email || "",
      data.project || "",
      data.message || "",
      "New",
    ]);

    // Send email notification
    MailApp.sendEmail({
      to: "contact@syntellite.com",
      subject: "New Contact Form Submission",
      body: `
        New contact form submission:
        
        Name: ${data.name}
        Email: ${data.email}
        Project Type: ${data.project}
        Message: ${data.message}
        
        Submitted at: ${data.timestamp}
      `,
    });

    return ContentService.createTextOutput(
      JSON.stringify({ success: true })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
```

### Data Validation:

Add validation to your script:

```javascript
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return ContentService.createTextOutput(
        JSON.stringify({ success: false, error: "Missing required fields" })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return ContentService.createTextOutput(
        JSON.stringify({ success: false, error: "Invalid email format" })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    // Continue with normal processing...
    const sheet = SpreadsheetApp.getActiveSheet();
    sheet.appendRow([
      data.timestamp ||
        new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      data.name,
      data.email,
      data.project || "",
      data.message,
      "New",
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ success: true })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Support

If you encounter any issues:

1. Check the Google Apps Script execution logs
2. Verify the deployment URL is correct
3. Test the script URL directly in your browser
4. Check browser console for any errors

---

**This method is much simpler and more reliable than the previous API-based approach!** 🚀

The form will work immediately in development mode (logging to console) and will integrate with Google Sheets once you complete the Apps Script setup.
