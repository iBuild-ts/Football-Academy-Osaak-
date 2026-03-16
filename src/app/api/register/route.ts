import { NextRequest, NextResponse } from 'next/server'
import { GoogleSpreadsheet } from 'google-spreadsheet'

// Google Sheets configuration
const SPREADSHEET_ID = '1NhTkgtltuQQCnovURCjJMdtJ9DTsFn5XjqVhqbACZ68'
const SHEET_NAME = 'Sheet1' // Default sheet name

// Service account credentials (you should set these as environment variables)
const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || ''
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n') || ''

// Initialize Google Sheets client
async function getGoogleSheetsClient() {
  try {
    const auth = new GoogleSpreadsheet.JWT({
      email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: GOOGLE_PRIVATE_KEY,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })
    
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID, auth)
    await doc.loadInfo()
    return doc
  } catch (error) {
    console.error('Error initializing Google Sheets client:', error)
    return null
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'dateOfBirth', 'address', 'city', 'state', 'country', 'height', 'weight', 'dominantFoot', 'jerseySize', 'shoeSize', 'position', 'experience']
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    // Initialize Google Sheets client
    const doc = await getGoogleSheetsClient()
    if (!doc) {
      return NextResponse.json(
        { error: 'Failed to connect to Google Sheets' },
        { status: 500 }
      )
    }

    // Get the sheet
    const sheet = doc.sheetsByTitle[SHEET_NAME] || await doc.addSheet({
      title: SHEET_NAME,
      headerValues: [
        'Timestamp', 'FirstName', 'LastName', 'Email', 'Phone', 'DateOfBirth', 'Address', 'City', 'State', 'PostalCode', 'Country',
        'Height', 'Weight', 'DominantFoot', 'JerseySize', 'ShoeSize', 'Position', 'SecondaryPosition', 'Experience', 'CurrentClub', 
        'PreviousClubs', 'Achievements', 'PlayingStyle', 'BloodType', 'Allergies', 'MedicalConditions', 'Medications', 
        'Injuries', 'EmergencyContact', 'EmergencyPhone', 'EmergencyRelationship', 'ParentName', 'ParentPhone', 
        'ParentEmail', 'ParentAddress', 'Education', 'Goals', 'Availability', 'Transportation', 
        'PreferredTrainingTime', 'HowDidYouHear'
      ]
    })

    // Prepare row data
    const timestamp = new Date().toISOString()
    const rowData = [
      timestamp,
      body.firstName || '',
      body.lastName || '',
      body.email || '',
      body.phone || '',
      body.dateOfBirth || '',
      body.address || '',
      body.city || '',
      body.state || '',
      body.postalCode || '',
      body.country || '',
      
      // Physical Attributes
      body.height || '',
      body.weight || '',
      body.dominantFoot || '',
      body.jerseySize || '',
      body.shoeSize || '',
      
      // Football Information
      body.position || '',
      body.secondaryPosition || '',
      body.experience || '',
      body.currentClub || '',
      body.previousClubs || '',
      body.achievements || '',
      body.playingStyle || '',
      
      // Health & Medical
      body.bloodType || '',
      body.allergies || '',
      body.medicalConditions || '',
      body.medications || '',
      body.injuries || '',
      body.emergencyContact || '',
      body.emergencyPhone || '',
      body.emergencyRelationship || '',
      
      // Parent/Guardian Information
      body.parentName || '',
      body.parentPhone || '',
      body.parentEmail || '',
      body.parentAddress || '',
      
      // Additional Information
      body.education || '',
      body.goals || '',
      body.availability || '',
      body.transportation || '',
      body.preferredTrainingTime || '',
      body.howDidYouHear || ''
    ]

    // Add row to Google Sheet
    await sheet.addRow(rowData)

    // Send confirmation email (you can implement this later)
    // For now, we'll just log it
    console.log('New registration:', {
      name: `${body.firstName} ${body.lastName}`,
      email: body.email,
      timestamp
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Registration successful! We will contact you soon.',
        data: {
          name: `${body.firstName} ${body.lastName}`,
          email: body.email
        }
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    // Initialize Google Sheets client
    const doc = await getGoogleSheetsClient()
    if (!doc) {
      return NextResponse.json(
        { error: 'Failed to connect to Google Sheets' },
        { status: 500 }
      )
    }

    // Get the sheet
    const sheet = doc.sheetsByTitle[SHEET_NAME]
    if (!sheet) {
      return NextResponse.json(
        { registrations: [], message: 'No registrations found' },
        { status: 200 }
      )
    }

    // Get all rows
    const rows = await sheet.getRows()
    
    // Convert to response format
    const registrations = rows.map((row, index) => ({
      id: index + 1,
      timestamp: row.get('Timestamp') || '',
      firstName: row.get('FirstName') || '',
      lastName: row.get('LastName') || '',
      email: row.get('Email') || '',
      phone: row.get('Phone') || '',
      dateOfBirth: row.get('DateOfBirth') || '',
      address: row.get('Address') || '',
      city: row.get('City') || '',
      state: row.get('State') || '',
      postalCode: row.get('PostalCode') || '',
      country: row.get('Country') || '',
      height: row.get('Height') || '',
      weight: row.get('Weight') || '',
      dominantFoot: row.get('DominantFoot') || '',
      jerseySize: row.get('JerseySize') || '',
      shoeSize: row.get('ShoeSize') || '',
      position: row.get('Position') || '',
      secondaryPosition: row.get('SecondaryPosition') || '',
      experience: row.get('Experience') || '',
      currentClub: row.get('CurrentClub') || '',
      previousClubs: row.get('PreviousClubs') || '',
      achievements: row.get('Achievements') || '',
      playingStyle: row.get('PlayingStyle') || '',
      bloodType: row.get('BloodType') || '',
      allergies: row.get('Allergies') || '',
      medicalConditions: row.get('MedicalConditions') || '',
      medications: row.get('Medications') || '',
      injuries: row.get('Injuries') || '',
      emergencyContact: row.get('EmergencyContact') || '',
      emergencyPhone: row.get('EmergencyPhone') || '',
      emergencyRelationship: row.get('EmergencyRelationship') || '',
      parentName: row.get('ParentName') || '',
      parentPhone: row.get('ParentPhone') || '',
      parentEmail: row.get('ParentEmail') || '',
      parentAddress: row.get('ParentAddress') || '',
      education: row.get('Education') || '',
      goals: row.get('Goals') || '',
      availability: row.get('Availability') || '',
      transportation: row.get('Transportation') || '',
      preferredTrainingTime: row.get('PreferredTrainingTime') || '',
      howDidYouHear: row.get('HowDidYouHear') || ''
    }))

    return NextResponse.json(
      { 
        registrations,
        total: registrations.length,
        message: 'Registrations retrieved successfully'
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error fetching registrations:', error)
    return NextResponse.json(
      { error: 'Failed to fetch registrations' },
      { status: 500 }
    )
  }
}
