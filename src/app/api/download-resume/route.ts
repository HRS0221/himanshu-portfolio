import { NextRequest, NextResponse } from 'next/server';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

export async function GET(request: NextRequest) {
  try {
    // Path to the resume file in the public folder
    const resumePath = join(process.cwd(), 'public', 'resume.pdf');
    
    // Check if file exists
    if (!existsSync(resumePath)) {
      return new NextResponse('Resume file not found', { status: 404 });
    }
    
    // Read the file
    const fileBuffer = readFileSync(resumePath);
    
    // Create response with proper headers for download
    const response = new NextResponse(fileBuffer);
    
    // Set headers to force download with correct filename
    response.headers.set('Content-Type', 'application/pdf');
    response.headers.set('Content-Disposition', 'attachment; filename="Himanshu_Salunke_Resume.pdf"');
    response.headers.set('Content-Length', fileBuffer.length.toString());
    
    return response;
  } catch (error) {
    console.error('Error serving resume:', error);
    return new NextResponse('Internal server error', { status: 500 });
  }
} 