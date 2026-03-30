import { NextRequest, NextResponse } from 'next/server'

// Google Apps Script API endpoint
const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwkEO2sBDKkylBGYxLZQotb4UofWgGl9N0_-XvJWFuOSCz8b6gWQCiivpS32Zjw8X8ETw/exec'

// Forward registration data to Google Apps Script
async function forwardToGoogleAppsScript(body: any) {
  try {
    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json()
    console.log('Google Apps Script response:', result)
    return result
  } catch (error) {
    console.error('Error forwarding to Google Apps Script:', error)
    throw error
  }
}

// In-memory storage as backup
let registrations: any[] = []

// Backup storage function
async function saveRegistrationBackup(body: any) {
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
    console.log('Registration saved to backup:', registration)
    return true
  } catch (error) {
    console.error('Error saving registration backup:', error)
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
    let result = null
    
    // Try Google Apps Script first
    try {
      result = await forwardToGoogleAppsScript(body)
      if (result && result.success) {
        saved = true
        storageMethod = 'Google Apps Script (Google Sheet)'
      }
    } catch (error) {
      console.error('Google Apps Script error:', error)
    }
    
    // Fallback to backup storage if Google Apps Script failed
    if (!saved) {
      saved = await saveRegistrationBackup(body)
      storageMethod = 'In-memory backup'
    }

    if (!saved) {
      return NextResponse.json(
        { error: 'Failed to save registration data' },
        { status: 500 }
      )
    }

    // Log the registration
    console.log('New registration:', {
      name: `${body.firstName} ${body.lastName}`,
      email: body.email,
      storageMethod,
      timestamp: new Date().toISOString()
    })

    // Return success response
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
    // Try to get registrations from Google Apps Script
    try {
      const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        const result = await response.json()
        if (result.registrations) {
          return NextResponse.json(
            { 
              registrations: result.registrations,
              total: result.total || result.registrations.length,
              message: 'Registrations retrieved successfully (Google Apps Script)',
              storageMethod: 'Google Apps Script (Google Sheet)'
            },
            { status: 200 }
          )
        }
      }
    } catch (error) {
      console.error('Google Apps Script GET error:', error)
    }

    // Fallback to in-memory storage
    return NextResponse.json(
      { 
        registrations,
        total: registrations.length,
        message: 'Registrations retrieved successfully (in-memory backup)',
        storageMethod: 'In-memory backup'
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
