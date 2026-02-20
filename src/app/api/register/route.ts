import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

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

    // Create data directory if it doesn't exist
    const dataDir = path.join(process.cwd(), 'data')
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }

    // CSV file path
    const csvPath = path.join(dataDir, 'players.csv')
    
    // Prepare CSV row
    const timestamp = new Date().toISOString()
    const csvRow = [
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
    ].map(field => `"${String(field).replace(/"/g, '""')}"`).join(',')

    // Check if file exists, if not create with headers
    const headers = 'Timestamp,FirstName,LastName,Email,Phone,DateOfBirth,Address,City,State,PostalCode,Country,Height,Weight,DominantFoot,JerseySize,ShoeSize,Position,SecondaryPosition,Experience,CurrentClub,PreviousClubs,Achievements,PlayingStyle,BloodType,Allergies,MedicalConditions,Medications,Injuries,EmergencyContact,EmergencyPhone,EmergencyRelationship,ParentName,ParentPhone,ParentEmail,ParentAddress,Education,Goals,Availability,Transportation,PreferredTrainingTime,HowDidYouHear\n'
    
    try {
      if (fs.existsSync(csvPath)) {
        // Append to existing file
        fs.appendFileSync(csvPath, csvRow + '\n')
      } else {
        // Create new file with headers
        fs.writeFileSync(csvPath, headers + csvRow + '\n')
      }
    } catch (fileError) {
      console.error('File operation error:', fileError)
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
    const csvPath = path.join(process.cwd(), 'data', 'players.csv')
    
    if (!fs.existsSync(csvPath)) {
      return NextResponse.json(
        { registrations: [], message: 'No registrations found' },
        { status: 200 }
      )
    }

    const csvContent = fs.readFileSync(csvPath, 'utf8')
    const lines = csvContent.split('\n').filter(line => line.trim())
    
    if (lines.length <= 1) {
      return NextResponse.json(
        { registrations: [], message: 'No registrations found' },
        { status: 200 }
      )
    }

    // Parse CSV (simple implementation)
    const headers = lines[0].split(',').map(h => h.replace(/"/g, ''))
    const registrations = lines.slice(1).map(line => {
      const values = line.split(',').map(v => v.replace(/"/g, ''))
      const obj: any = {}
      headers.forEach((header, index) => {
        obj[header] = values[index] || ''
      })
      return obj
    })

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
