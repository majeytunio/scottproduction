import { NextResponse } from 'next/server'
import { supabase } from '../../../../lib/supabase'

export async function POST(request) {
  try {
    // Sign out the user
    const { error } = await supabase.auth.signOut()
    
    if (error) {
      throw error
    }
    
    // Return success response
    return NextResponse.json({ 
      success: true, 
      message: 'Logged out successfully' 
    })
    
  } catch (error) {
    console.error('Logout error:', error)
    return NextResponse.json(
      { error: 'Logout failed' },
      { status: 500 }
    )
  }
}

// Optional: Also handle GET requests for direct browser access
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed. Use POST.' },
    { status: 405 }
  )
}