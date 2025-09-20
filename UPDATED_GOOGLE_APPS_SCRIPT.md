# Updated Google Apps Script for Phone Field

The Google Apps Script needs to be updated to handle the new phone field. Here's the corrected script:

## Updated Google Apps Script Code

Replace your existing Google Apps Script with this updated version:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSheet();

    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);

    // Add a new row with the form data (including phone field)
    sheet.appendRow([
      data.timestamp ||
        new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      data.name || "",
      data.email || "",
      data.phone || "", // NEW: Phone field added
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

## Updated Google Sheet Headers

Make sure your Google Sheet has these headers in the first row:

- A1: `Timestamp`
- B1: `Name`
- C1: `Email`
- D1: `Phone` ← NEW FIELD
- E1: `Project Type`
- F1: `Message`
- G1: `Status`

## Steps to Update:

1. **Update Google Sheet Headers:**

   - Open your Google Sheet
   - Insert a new column after Email (column C)
   - Set D1 to "Phone"
   - Shift "Project Type" to column E
   - Shift "Message" to column F
   - Shift "Status" to column G

2. **Update Google Apps Script:**

   - Go to Extensions → Apps Script in your Google Sheet
   - Replace the existing code with the updated script above
   - Save the script (Ctrl+S or Cmd+S)
   - Deploy a new version:
     - Click "Deploy" → "New deployment"
     - Add description: "Added phone field support"
     - Click "Deploy"

3. **Test the Updated Integration:**
   - Submit a test form with phone number
   - Check that the phone number appears in column D

## With Email Notifications (Optional)

If you want email notifications that include the phone number:

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
      data.phone || "", // Phone field
      data.project || "",
      data.message || "",
      "New",
    ]);

    // Send email notification with phone number
    MailApp.sendEmail({
      to: "contact@syntellite.com",
      subject: "New Contact Form Submission",
      body: `
        New contact form submission:
        
        Name: ${data.name}
        Email: ${data.email}
        Phone: ${data.phone}  ← NEW FIELD IN EMAIL
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

## Validation with Phone Field

For enhanced validation including phone number:

```javascript
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    // Validate required fields (including phone)
    if (!data.name || !data.email || !data.phone || !data.message) {
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

    // Validate phone number (basic validation)
    if (data.phone.length < 10) {
      return ContentService.createTextOutput(
        JSON.stringify({ success: false, error: "Phone number too short" })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    // Continue with normal processing...
    const sheet = SpreadsheetApp.getActiveSheet();
    sheet.appendRow([
      data.timestamp ||
        new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      data.name,
      data.email,
      data.phone, // Phone field
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

After updating the Google Apps Script and redeploying, the phone numbers should start appearing in your Google Sheet submissions.
