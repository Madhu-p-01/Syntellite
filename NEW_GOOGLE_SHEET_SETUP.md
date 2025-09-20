# Complete New Google Sheet Setup with Phone Field

## Step 1: Create New Google Sheet

1. **Go to [Google Sheets](https://sheets.google.com)**
2. **Click "Blank" to create a new spreadsheet**
3. **Name your sheet**: "Syntellite Contact Form Submissions"

## Step 2: Set Up Column Headers

In the first row, add these headers exactly:

| A1            | B1       | C1        | D1        | E1               | F1          | G1         |
| ------------- | -------- | --------- | --------- | ---------------- | ----------- | ---------- |
| **Timestamp** | **Name** | **Email** | **Phone** | **Project Type** | **Message** | **Status** |

**Important**: Make sure column D1 is labeled "Phone"

## Step 3: Create Google Apps Script

1. **In your Google Sheet, click "Extensions" → "Apps Script"**
2. **Delete the default code**
3. **Paste this complete script** (includes phone field):

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSheet();

    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);

    // Log received data for debugging
    console.log("Received form data:", data);

    // Add a new row with all form data including phone
    sheet.appendRow([
      data.timestamp ||
        new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      data.name || "",
      data.email || "",
      data.phone || "", // Phone field included
      data.project || "",
      data.message || "",
      "New",
    ]);

    console.log("Data successfully added to sheet");

    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({ success: true, message: "Form submitted successfully" })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    console.error("Error processing form submission:", error);

    // Return error response
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({
      message: "Syntellite Contact Form Endpoint is Active!",
      timestamp: new Date().toISOString(),
    })
  ).setMimeType(ContentService.MimeType.JSON);
}

// Test function to verify sheet access
function testSheetAccess() {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    console.log("Sheet name:", sheet.getName());
    console.log("Sheet ID:", sheet.getSheetId());
    return "Sheet access successful";
  } catch (error) {
    console.error("Sheet access error:", error);
    return "Sheet access failed";
  }
}
```

4. **Save the script** (Ctrl+S or Cmd+S)
5. **Name your project**: "Syntellite Contact Form Handler"

## Step 4: Deploy the Script

1. **Click "Deploy" button** (top-right corner)
2. **Choose "New deployment"**
3. **Click the gear icon** next to "Type"
4. **Select "Web app"**
5. **Configure deployment settings**:
   - **Description**: "Syntellite Contact Form with Phone Field"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone"
6. **Click "Deploy"**
7. **Copy the Web app URL** (it looks like: `https://script.google.com/macros/s/SCRIPT_ID/exec`)
8. **Click "Done"**

## Step 5: Update Environment Variables

1. **In your project, create or update `.env` file**:

```env
VITE_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_ACTUAL_SCRIPT_ID/exec
```

**Replace `YOUR_ACTUAL_SCRIPT_ID` with the actual URL you copied**

## Step 6: Test the Setup

### Test 1: Direct Script Test

1. **Open the Web app URL in your browser**
2. **You should see**: `{"message":"Syntellite Contact Form Endpoint is Active!","timestamp":"..."}`

### Test 2: Form Submission Test

1. **Start your development server**: `npm run dev`
2. **Go to your contact page**
3. **Fill out the form with test data**:
   - Name: Test User
   - Email: test@example.com
   - Phone: +91 9999999999
   - Project Type: Web Development
   - Message: Testing phone field
4. **Submit the form**
5. **Check your Google Sheet** - you should see the data with phone number in column D

## Step 7: Verify Everything Works

After submitting a test form, your Google Sheet should look like this:

| Timestamp             | Name      | Email            | Phone          | Project Type    | Message             | Status |
| --------------------- | --------- | ---------------- | -------------- | --------------- | ------------------- | ------ |
| 29/8/2025, 2:45:19 pm | Test User | test@example.com | +91 9999999999 | web-development | Testing phone field | New    |

## Troubleshooting

### If form submission doesn't work:

1. **Check browser console** for errors
2. **Verify the .env file** has the correct script URL
3. **Check Google Apps Script executions**:
   - Go to Apps Script editor
   - Click "Executions" in left sidebar
   - Look for recent runs and any errors

### If phone field is still empty:

1. **Double-check the script** has `data.phone || ""` in the appendRow array
2. **Verify column D header** is exactly "Phone"
3. **Make sure you deployed the new version** of the script

### If nothing appears in the sheet:

1. **Test the script URL directly** in browser
2. **Check if the script has proper permissions**
3. **Verify the sheet is not protected or restricted**

## Advanced Features (Optional)

### Add Email Notifications:

```javascript
// Add this after the sheet.appendRow line in doPost function:

// Send email notification
MailApp.sendEmail({
  to: "contact@syntellite.com",
  subject: "New Contact Form Submission - " + (data.name || "Unknown"),
  body: `
New contact form submission received:

Name: ${data.name || "Not provided"}
Email: ${data.email || "Not provided"}
Phone: ${data.phone || "Not provided"}
Project Type: ${data.project || "Not specified"}
Message: ${data.message || "No message"}

Submitted at: ${
    data.timestamp ||
    new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
  }

---
Syntellite Contact Form System
  `,
});
```

### Add Data Validation:

```javascript
// Add this validation before sheet.appendRow:

// Validate required fields
if (!data.name || !data.email || !data.phone || !data.message) {
  throw new Error("Missing required fields");
}

// Validate email format
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(data.email)) {
  throw new Error("Invalid email format");
}

// Validate phone number (basic check)
if (data.phone.length < 10) {
  throw new Error("Phone number too short");
}
```

## Security Notes

- ✅ No API keys needed
- ✅ Google handles authentication
- ✅ Data stays in your Google account
- ✅ Script runs in Google's secure environment

## Final Checklist

- [ ] New Google Sheet created with correct headers
- [ ] Google Apps Script created and deployed
- [ ] Web app URL copied and added to .env file
- [ ] Test form submission successful
- [ ] Phone number appears in column D
- [ ] All form fields working correctly

Your new Google Sheet is now properly configured to capture phone numbers along with all other contact form data!
