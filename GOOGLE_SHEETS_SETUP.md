# Google Sheets Integration Setup Guide

## Step 1: Create Your Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Create three sheets (tabs):
   - `Appointments`
   - `Partners`
   - `Consultations`

## Step 2: Set Up the Appointments Sheet

In the `Appointments` sheet, add these column headers in Row 1:
- A1: Timestamp
- B1: Full Name
- C1: Phone
- D1: Email
- E1: Service
- F1: Date & Time
- G1: Pincode
- H1: Message

## Step 3: Create Google Apps Script

1. In your Google Sheet, click `Extensions` → `Apps Script`
2. Delete any existing code
3. Paste the following code:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Appointments');
    const data = JSON.parse(e.postData.contents);
    
    // Add timestamp and form data to sheet
    sheet.appendRow([
      new Date(),
      data.fullName,
      data.phone,
      data.email,
      data.service,
      data.dateTime,
      data.pincode,
      data.message
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Appointment saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput('Appointment API is running');
}
```

## Step 4: Deploy the Script

1. Click the `Deploy` button → `New deployment`
2. Click the gear icon ⚙️ → Select `Web app`
3. Configure:
   - Description: "Appointment Form API"
   - Execute as: "Me"
   - Who has access: "Anyone"
4. Click `Deploy`
5. Copy the Web App URL (it looks like: `https://script.google.com/macros/s/...../exec`)
6. Click `Authorize access` and grant permissions

## Step 5: Update Your React App

1. Open `src/config/googleSheets.js`
2. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` with your Web App URL
3. Save the file

## Step 6: Test the Integration

1. Run your React app
2. Fill out the appointment form
3. Submit it
4. Check your Google Sheet - you should see the data appear!

## Troubleshooting

- If data doesn't appear, check the browser console for errors
- Make sure the Web App is deployed with "Anyone" access
- Verify the URL is correct in `googleSheets.js`
- Check the Apps Script execution logs: Apps Script → Executions

## Optional: Email Notifications

Add this to your Apps Script to send email notifications:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Appointments');
    const data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      new Date(),
      data.fullName,
      data.phone,
      data.email,
      data.service,
      data.dateTime,
      data.pincode,
      data.message
    ]);
    
    // Send email notification
    MailApp.sendEmail({
      to: 'your-email@example.com',
      subject: 'New Appointment Request',
      body: `New appointment from ${data.fullName}\nPhone: ${data.phone}\nService: ${data.service}`
    });
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```
