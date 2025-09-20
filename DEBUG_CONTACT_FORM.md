# Debug Contact Form - Phone Field Issue

## Current Status Analysis

✅ **Frontend is correctly configured:**

- Phone field exists in the form
- Phone field is included in the ContactFormData interface
- Phone field is being sent in the JSON payload
- Form validation includes phone field

❌ **Backend (Google Apps Script) needs verification**

## Step-by-Step Debugging

### Step 1: Test What Data is Being Sent

1. **Open your website contact form**
2. **Open browser Developer Tools** (F12 or right-click → Inspect)
3. **Go to Console tab**
4. **Fill out the form with test data including phone number**
5. **Submit the form**
6. **Check the console output**

You should see something like this in the console:

```
Form submission data: {
  name: "Test User",
  email: "test@example.com",
  phone: "+91 9999999999",  ← This should be present
  project: "web-development",
  message: "Test message",
  timestamp: "28/8/2025, 1:09:25 pm"
}
```

**If you see the phone field in the console log, the frontend is working correctly.**

### Step 2: Verify Google Apps Script

The issue is likely in your Google Apps Script. Here's what to check:

#### Current Google Apps Script (WRONG - Missing Phone):

```javascript
sheet.appendRow([
  data.timestamp ||
    new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
  data.name || "",
  data.email || "",
  data.project || "", // ← Missing phone field here!
  data.message || "",
  "New",
]);
```

#### Updated Google Apps Script (CORRECT - With Phone):

```javascript
sheet.appendRow([
  data.timestamp ||
    new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
  data.name || "",
  data.email || "",
  data.phone || "", // ← Phone field added here!
  data.project || "",
  data.message || "",
  "New",
]);
```

### Step 3: Update Google Apps Script

1. **Go to your Google Sheet**
2. **Click Extensions → Apps Script**
3. **Replace your current script with this updated version:**

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSheet();

    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);

    // Log the received data for debugging
    console.log("Received data:", data);

    // Add a new row with the form data (including phone field)
    sheet.appendRow([
      data.timestamp ||
        new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      data.name || "",
      data.email || "",
      data.phone || "", // ← IMPORTANT: Phone field must be here
      data.project || "",
      data.message || "",
      "New",
    ]);

    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({ success: true })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    // Log error for debugging
    console.error("Error in doPost:", error);

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

4. **Save the script** (Ctrl+S)
5. **Deploy new version:**
   - Click "Deploy" → "New deployment"
   - Description: "Added phone field and debugging"
   - Click "Deploy"

### Step 4: Update Google Sheet Headers

Make sure your Google Sheet has the correct column headers:

| A         | B    | C     | D         | E            | F       | G      |
| --------- | ---- | ----- | --------- | ------------ | ------- | ------ |
| Timestamp | Name | Email | **Phone** | Project Type | Message | Status |

**Important:** Column D must be labeled "Phone"

### Step 5: Test Again

1. **Submit a new test form**
2. **Check your Google Sheet**
3. **The phone number should now appear in column D**

### Step 6: Check Google Apps Script Logs

If it's still not working:

1. **Go to your Google Apps Script editor**
2. **Click "Executions" in the left sidebar**
3. **Look for recent executions and any error messages**
4. **Check the logs to see what data was received**

## Common Issues and Solutions

### Issue 1: Phone field appears in wrong column

**Solution:** Make sure your Google Sheet headers match the script order

### Issue 2: Phone field is empty but other fields work

**Solution:** The Google Apps Script is missing `data.phone ||` in the appendRow array

### Issue 3: Form submits but nothing appears in sheet

**Solution:** Check if the Google Apps Script URL is correctly configured in your environment variables

### Issue 4: Old data has phone numbers but new data doesn't

**Solution:** You need to redeploy the Google Apps Script after making changes

## Environment Variable Check

Make sure you have this in your `.env` file:

```
VITE_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_ACTUAL_SCRIPT_ID/exec
```

Replace `YOUR_ACTUAL_SCRIPT_ID` with your real script ID.

## Quick Test

To quickly test if the frontend is working:

1. **Temporarily comment out the Google Apps Script URL** in your `.env` file
2. **Submit the form**
3. **Check browser console** - you should see the complete form data including phone
4. **If phone appears in console, the issue is definitely in Google Apps Script**

Let me know what you see in the browser console when you submit the form!
