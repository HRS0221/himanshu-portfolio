export const runtime = 'edge';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();
    const correctPassword = process.env.PAGE_ACCESS_PASSWORD;

    if (!correctPassword) {
      console.error('PAGE_ACCESS_PASSWORD environment variable is not set');
      return NextResponse.json({ 
        success: false,
        error: 'Authentication service is not properly configured.' 
      }, { status: 500 });
    }

    if (password === correctPassword) {
      return NextResponse.json({ 
        success: true,
        message: 'Authentication successful' 
      });
    } else {
      return NextResponse.json({ 
        success: false,
        error: 'Incorrect password' 
      }, { status: 401 });
    }
  } catch (error) {
    console.error('Authentication error:', error);
    return NextResponse.json({ 
      success: false,
      error: 'Authentication failed. Please try again.' 
    }, { status: 500 });
  }
}
