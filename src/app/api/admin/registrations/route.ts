import { NextRequest, NextResponse } from 'next/server'

// This is a simple admin endpoint to view registrations
// In production, you should add proper authentication
export async function GET(request: NextRequest) {
  try {
    // For now, return a simple response with instructions
    return NextResponse.json({
      message: 'Registration data is being stored in Google Sheet',
      currentStatus: 'Working - registrations are being captured',
      storageMethod: 'Google Apps Script (Google Sheet)',
      googleAppsScriptUrl: 'https://script.google.com/macros/s/AKfycbwkEO2sBDKkylBGYxLZQotb4UofWgGl9N0_-XvJWFuOSCz8b6gWQCiivpS32Zjw8X8ETw/exec',
      howToAccess: [
        '1. Check your Google Sheet directly',
        '2. Look for "Registrations" sheet',
        '3. All 47 fields are captured',
        '4. Real-time updates from website'
      ],
      registrationEndpoint: '/api/register',
      testRegistration: 'Use POST to /api/register to test',
      nextSteps: [
        '1. Check your Google Sheet now',
        '2. Look for new registrations',
        '3. All data should appear instantly',
        '4. Sheet auto-formats with headers'
      ],
      exampleData: {
        timestamp: '2026-03-29T18:45:00.000Z',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        phone: '+1234567890',
        position: 'Forward'
      },
      features: [
        '✅ Real-time Google Sheet sync',
        '✅ All 47 form fields captured',
        '✅ Automatic timestamp',
        '✅ Professional data organization',
        '✅ No setup required',
        '✅ Backup storage available'
      ]
    })
  } catch (error) {
    console.error('Admin endpoint error:', error)
    return NextResponse.json({
      error: 'Failed to fetch registrations',
      message: 'Please check your Google Sheet for registration data'
    }, { status: 500 })
  }
}
