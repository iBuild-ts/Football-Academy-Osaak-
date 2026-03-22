import { NextRequest, NextResponse } from 'next/server'
import { GoogleSpreadsheet } from 'google-spreadsheet'
import { JWT } from 'google-auth-library'

// Google Sheets configuration
const SPREADSHEET_ID = '1NhTkgtltuQQCnovURCjJMdtJ9DTsFn5XjqVhqbACZ68'
const SHEET_NAME = 'Sheet1' // Default sheet name

// Service account credentials (you should set these as environment variables)
const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || 'your-service-account@your-project.iam.gserviceaccount.com'
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n') || '-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----\n'

// Check if Google Sheets is configured
const USE_GOOGLE_SHEETS = false // Force CSV for now until environment variables are set

// Initialize Google Sheets client
async function getGoogleSheetsClient() {
  if (!USE_GOOGLE_SHEETS) return null
  
  try {
    const auth = new JWT({
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

// In-memory storage for Vercel (temporary solution)
let registrations: any[] = []

// Simple storage function that works on Vercel
async function saveRegistration(body: any) {
  try {
    const timestamp = new Date().toISOString()
    const registration = {
      timestamp,
      firstName: body.firstName || '',
      lastName: body.lastName || '',
      email: body.email || '',
      phone: body.phone || '',
      dateOfBirth: body.dateOfBirth || '',
      address: body.address || '',
      city: body.city || '',
      state: body.state || '',
      postalCode: body.postalCode || '',
      country: body.country || '',
      height: body.height || '',
      weight: body.weight || '',
      dominantFoot: body.dominantFoot || '',
      jerseySize: body.jerseySize || '',
      shoeSize: body.shoeSize || '',
      position: body.position || '',
      secondaryPosition: body.secondaryPosition || '',
      experience: body.experience || '',
      currentClub: body.currentClub || '',
      previousClubs: body.previousClubs || '',
      achievements: body.achievements || '',
      playingStyle: body.playingStyle || '',
      bloodType: body.bloodType || '',
      allergies: body.allergies || '',
      medicalConditions: body.medicalConditions || '',
      medications: body.medications || '',
      injuries: body.injuries || '',
      emergencyContact: body.emergencyContact || '',
      emergencyPhone: body.emergencyPhone || '',
      emergencyRelationship: body.emergencyRelationship || '',
      parentName: body.parentName || '',
      parentPhone: body.parentPhone || '',
      parentEmail: body.parentEmail || '',
      parentAddress: body.parentAddress || '',
      education: body.education || '',
      goals: body.goals || '',
      availability: body.availability || '',
      transportation: body.transportation || '',
      preferredTrainingTime: body.preferredTrainingTime || '',
      howDidYouHear: body.howDidYouHear || ''
    }
    
    registrations.push(registration)
    console.log('Registration saved:', registration)
    return true
  } catch (error) {
    console.error('Error saving registration:', error)
    return false
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

    let saved = false
    let storageMethod = ''
    
    if (USE_GOOGLE_SHEETS) {
      // Try Google Sheets first
      try {
        const doc = await getGoogleSheetsClient()
        if (doc) {
          // Get or create sheet
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
          saved = true
          storageMethod = 'Google Sheets'
        }
      } catch (error) {
        console.error('Google Sheets error:', error)
      }
    }
    
    // Fallback to in-memory storage if Google Sheets failed or not configured
    if (!saved) {
      saved = await saveRegistration(body)
      storageMethod = 'In-memory storage'
    }

    if (!saved) {
      return NextResponse.json(
        { error: 'Failed to save registration data' },
        { status: 500 }
      )
    }

    // Send confirmation email (you can implement this later)
    // For now, we'll just log it
    console.log('New registration:', {
      name: `${body.firstName} ${body.lastName}`,
      email: body.email,
      storageMethod,
      timestamp: new Date().toISOString()
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Registration successful! We will contact you soon.',
        data: {
          name: `${body.firstName} ${body.lastName}`,
          email: body.email,
          storageMethod
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
    if (doc) {
      // Get the sheet
      const sheet = doc.sheetsByTitle[SHEET_NAME]
      if (sheet) {
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
      }
    }

    // Fallback to in-memory storage
    return NextResponse.json(
      { 
        registrations,
        total: registrations.length,
        message: 'Registrations retrieved successfully (in-memory storage)'
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
