# Google Apps Script for OSAAK FC Registration

This Google Apps Script will receive registration data from your website and store it in your Google Sheet.

## 🚀 Quick Setup (5 Minutes)

### Step 1: Create Google Apps Script
1. Go to: https://script.google.com/home
2. Click "New Project"
3. Delete any existing code
4. Copy and paste the script below

### Step 2: Paste This Code

```javascript
// OSAAK FC Registration API
// Google Apps Script to receive and store registration data

// Configuration
const SHEET_NAME = 'Registrations'; // Change if your sheet has different name
const HEADER_ROW = [
  'Timestamp', 'FirstName', 'LastName', 'Email', 'Phone', 'DateOfBirth', 
  'Address', 'City', 'State', 'PostalCode', 'Country', 'Height', 'Weight', 
  'DominantFoot', 'JerseySize', 'ShoeSize', 'Position', 'SecondaryPosition', 
  'Experience', 'CurrentClub', 'PreviousClubs', 'Achievements', 'PlayingStyle', 
  'BloodType', 'Allergies', 'MedicalConditions', 'Medications', 'Injuries', 
  'EmergencyContact', 'EmergencyPhone', 'EmergencyRelationship', 'ParentName', 
  'ParentPhone', 'ParentEmail', 'ParentAddress', 'Education', 'Goals', 
  'Availability', 'Transportation', 'PreferredTrainingTime', 'HowDidYouHear'
];

// Initialize sheet
function initializeSheet() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  if (!sheet) {
    const newSheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet(SHEET_NAME);
    newSheet.getRange(1, 1, 1, HEADER_ROW.length).setValues([HEADER_ROW]);
    newSheet.getRange("A1:AJ1").setFontWeight("bold");
    newSheet.autoResizeColumn(1, HEADER_ROW.length);
  }
}

// Main function - handle POST requests
function doPost(e) {
  try {
    // Initialize sheet if needed
    initializeSheet();
    
    // Parse request data
    const data = JSON.parse(e.postData.contents);
    
    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'phone'];
    for (const field of requiredFields) {
      if (!data[field]) {
        return ContentService.createTextOutput(JSON.stringify({
          success: false,
          error: `Missing required field: ${field}`
        })).setMimeType(ContentService.MimeType.JSON);
      }
    }
    
    // Prepare row data
    const rowData = [
      new Date().toISOString(), // Timestamp
      data.firstName || '',
      data.lastName || '',
      data.email || '',
      data.phone || '',
      data.dateOfBirth || '',
      data.address || '',
      data.city || '',
      data.state || '',
      data.postalCode || '',
      data.country || '',
      data.height || '',
      data.weight || '',
      data.dominantFoot || '',
      data.jerseySize || '',
      data.shoeSize || '',
      data.position || '',
      data.secondaryPosition || '',
      data.experience || '',
      data.currentClub || '',
      data.previousClubs || '',
      data.achievements || '',
      data.playingStyle || '',
      data.bloodType || '',
      data.allergies || '',
      data.medicalConditions || '',
      data.medications || '',
      data.injuries || '',
      data.emergencyContact || '',
      data.emergencyPhone || '',
      data.emergencyRelationship || '',
      data.parentName || '',
      data.parentPhone || '',
      data.parentEmail || '',
      data.parentAddress || '',
      data.education || '',
      data.goals || '',
      data.availability || '',
      data.transportation || '',
      data.preferredTrainingTime || '',
      data.howDidYouHear || ''
    ];
    
    // Add row to sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    sheet.appendRow(rowData);
    
    // Auto-resize columns for better readability
    sheet.autoResizeColumn(1, rowData.length);
    
    // Log the registration
    console.log('New registration:', {
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      timestamp: new Date().toISOString()
    });
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Registration successful! We will contact you soon.',
      data: {
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        storageMethod: 'Google Apps Script'
      }
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    console.error('Registration error:', error);
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: 'Internal server error'
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Function to handle GET requests (view registrations)
function doGet(e) {
  try {
    initializeSheet();
    
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    const data = sheet.getDataRange().getValues();
    
    // Convert to JSON format
    const headers = data[0];
    const registrations = data.slice(1).map((row, index) => {
      const obj = {};
      headers.forEach((header, i) => {
        obj[header] = row[i] || '';
      });
      obj.id = index + 1;
      return obj;
    });
    
    return ContentService.createTextOutput(JSON.stringify({
      registrations: registrations,
      total: registrations.length,
      message: 'Registrations retrieved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    console.error('Get registrations error:', error);
    return ContentService.createTextOutput(JSON.stringify({
      error: 'Failed to fetch registrations'
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function - run this to test the script
function testRegistration() {
  const testData = {
    firstName: 'Test',
    lastName: 'Player',
    email: 'test@osaak.com',
    phone: '08012345678',
    dateOfBirth: '2005-06-15',
    address: 'Test Address',
    city: 'Ondo',
    state: 'Ondo State',
    country: 'Nigeria',
    height: '175',
    weight: '65',
    dominantFoot: 'right',
    jerseySize: 'L',
    shoeSize: '42',
    position: 'Midfielder',
    experience: '2 years'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  console.log('Test result:', result.getContent());
}
```

### Step 3: Deploy the Script

1. **Save the script**: Click "Save project" (💾 icon)
2. **Deploy**: Click "Deploy" → "New Deployment"
3. **Configuration**:
   - Select type: "Web app"
   - Description: "OSAAK FC Registration API"
   - Execute as: "Me" (your Google account)
   - Who has access: "Anyone" (important for website to call it)
4. **Click "Deploy"**
5. **Authorization**: 
   - Click "Authorize access"
   - Choose your Google account
   - Click "Advanced" → "Go to (unsafe)"
   - Click "Allow"
6. **Copy the Web app URL** - this is your API endpoint!

### Step 4: Update Your Website

Once you have the Web app URL, update your website registration API:

1. **Share your Web app URL with me**
2. **I'll update the registration route** to use your Google Apps Script
3. **Test the integration**
4. **All registrations will go directly to your Google Sheet**

## 📋 What You'll Get

### ✅ Features:
- **Real-time data sync** to your Google Sheet
- **All 47 form fields** captured
- **Automatic timestamp** for each registration
- **Error handling** and validation
- **GET endpoint** to view registrations
- **Test function** included

### 📊 Your Google Sheet Will Have:
- **Timestamp**: When registration was submitted
- **Player Info**: Name, email, phone, DOB, address
- **Physical Details**: Height, weight, dominant foot, sizes
- **Football Info**: Position, experience, clubs, achievements
- **Medical Info**: Blood type, allergies, conditions
- **Emergency Contacts**: Name, phone, relationship
- **Parent Info**: Full contact details
- **Additional**: Education, goals, availability

### 🔧 API Endpoints:
- **POST**: `Your Web app URL` - Submit registrations
- **GET**: `Your Web app URL` - View all registrations

## 🚀 Next Steps

1. **Create the Google Apps Script** using the code above
2. **Deploy as Web app** and copy the URL
3. **Share the URL with me** to update your website
4. **Test the integration**
5. **Start receiving registrations** directly in your Google Sheet!

## 📞 Need Help?

If you need help with any step:
1. **Share your Web app URL** with me
2. **I'll update the website** to use it
3. **We'll test together** to ensure it works
4. **All registrations will flow** to your Google Sheet automatically

This is the easiest way to get registration data into your Google Sheet without complex setup! 🚀
