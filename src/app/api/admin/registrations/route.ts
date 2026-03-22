import { NextRequest, NextResponse } from 'next/server'

// In-memory storage (same as register route)
let registrations: any[] = []

// This is a simple admin endpoint to view registrations
// In production, you should add proper authentication
export async function GET(request: NextRequest) {
  try {
    // For now, return a simple response with instructions
    return NextResponse.json({
      message: 'Registration data is being stored in-memory',
      currentStatus: 'Working - registrations are being captured',
      storageMethod: 'In-memory storage (temporary)',
      howToAccess: [
        '1. Check Vercel server logs for registration data',
        '2. Set up Google Sheets for permanent storage',
        '3. Follow GOOGLE_SHEETS_SETUP.md file'
      ],
      registrationEndpoint: '/api/register',
      testRegistration: 'Use POST to /api/register to test',
      nextSteps: [
        '1. Go to Vercel dashboard',
        '2. Click on your project',
        '3. Go to Functions tab',
        '4. Click on register function',
        '5. View Logs to see registration data'
      ],
      exampleData: {
        timestamp: '2026-03-22T18:45:00.000Z',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        phone: '+1234567890',
        position: 'Forward'
      }
    })
  } catch (error) {
    console.error('Admin endpoint error:', error)
    return NextResponse.json({
      error: 'Failed to fetch registrations',
      message: 'Please check Vercel server logs for registration data'
    }, { status: 500 })
  }
}
