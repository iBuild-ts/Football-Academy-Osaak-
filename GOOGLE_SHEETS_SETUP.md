# Google Sheets Setup Instructions

## Overview
The registration form now stores data directly to your Google Sheet instead of local CSV files.

## Prerequisites
1. **Google Cloud Project**: Create a Google Cloud project at [console.cloud.google.com](https://console.cloud.google.com)
2. **Enable Google Sheets API**: In your project, enable the Google Sheets API
3. **Create Service Account**: Create a service account for server-to-server communication
4. **Download JSON Key**: Download the service account JSON key file

## Setup Steps

### 1. Create Google Cloud Project
```
1. Go to Google Cloud Console
2. Click "Create Project" or select existing project
3. Note your Project ID
```

### 2. Enable Google Sheets API
```
1. In your project, go to "APIs & Services" > "Library"
2. Search for "Google Sheets API"
3. Click "Enable"
```

### 3. Create Service Account
```
1. Go to "IAM & Admin" > "Service Accounts"
2. Click "Create Service Account"
3. Fill in details:
   - Name: OSAAK Academy Registration
   - Description: Service account for registration form
4. Click "Create and Continue"
5. Skip granting roles (click "Done")
6. Click on the created service account
7. Go to "Keys" tab
8. Click "Add Key" > "Create new key"
9. Select "JSON" and click "Create"
10. Download the JSON file
```

### 4. Share Google Sheet
```
1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1NhTkgtltuQQCnovURCjJMdtJ9DTsFn5XjqVhqbACZ68/edit
2. Click "Share" button (top right)
3. In the "Add people and groups" field, paste the service account email
4. Set role to "Editor"
5. Click "Send"
```

### 5. Configure Environment Variables
Create a `.env.local` file in the project root:

```bash
# Google Sheets API Configuration
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----
YOUR_ACTUAL_PRIVATE_KEY_HERE_WITH_PROPER_LINE_BREAKS
-----END PRIVATE KEY-----"
```

**Important**: 
- Replace the email with your actual service account email
- Replace the private key with your actual private key from the JSON file
- Make sure line breaks are preserved properly (use \n for newlines)

## Google Sheet Configuration

The application is configured to use:
- **Spreadsheet ID**: `1NhTkgtltuQQCnovURCjJMdtJ9DTsFn5XjqVhqbACZ68`
- **Sheet Name**: `Sheet1` (default)

## Features

### Automatic Sheet Creation
If the sheet doesn't exist, the API will automatically create it with headers:
- Timestamp, FirstName, LastName, Email, Phone, DateOfBirth, Address, City, State, PostalCode, Country
- Height, Weight, DominantFoot, JerseySize, ShoeSize, Position, SecondaryPosition, Experience
- CurrentClub, PreviousClubs, Achievements, PlayingStyle, BloodType, Allergies
- MedicalConditions, Medications, Injuries, EmergencyContact, EmergencyPhone, EmergencyRelationship
- ParentName, ParentPhone, ParentEmail, ParentAddress, Education, Goals, Availability
- Transportation, PreferredTrainingTime, HowDidYouHear

### Real-time Data Sync
- All form submissions are immediately saved to Google Sheets
- No local CSV files are created
- Data is accessible instantly in your Google Sheet
- Perfect for lead management and follow-up

## Testing

After setup:
1. Restart your development server: `npm run dev`
2. Test the registration form at http://localhost:3000/register
3. Check your Google Sheet for new entries
4. Verify all form fields are properly saved

## Troubleshooting

### Common Issues
- **Permission Denied**: Make sure the service account email has "Editor" access to the sheet
- **Invalid Credentials**: Double-check the service account email and private key
- **Sheet Not Found**: Verify the spreadsheet ID is correct and sheet is shared

### Security Notes
- Never commit the `.env.local` file to version control
- Keep your service account key secure
- Regularly rotate service account credentials for production

## Support

For issues with Google Sheets setup, refer to:
- [Google Sheets API Documentation](https://developers.google.com/sheets/api)
- [Google Cloud Authentication](https://cloud.google.com/docs/authentication)
