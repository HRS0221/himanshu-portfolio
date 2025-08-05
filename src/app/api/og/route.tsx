import { NextRequest } from 'next/server';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || 'Himanshu Salunke';
    const description = searchParams.get('description') || 'Aspiring Data Scientist & ML Engineer';

    // Create SVG content directly
    const svg = `
      <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#0f172a;stop-opacity:1" />
            <stop offset="50%" style="stop-color:#1e293b;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#334155;stop-opacity:1" />
          </linearGradient>
          <radialGradient id="overlay1" cx="25%" cy="25%" r="50%">
            <stop offset="0%" style="stop-color:rgba(59,130,246,0.1);stop-opacity:1" />
            <stop offset="50%" style="stop-color:rgba(59,130,246,0);stop-opacity:1" />
          </radialGradient>
          <radialGradient id="overlay2" cx="75%" cy="75%" r="50%">
            <stop offset="0%" style="stop-color:rgba(59,130,246,0.08);stop-opacity:1" />
            <stop offset="50%" style="stop-color:rgba(59,130,246,0);stop-opacity:1" />
          </radialGradient>
          <linearGradient id="logo" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
            <stop offset="50%" style="stop-color:#1d4ed8;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#1e40af;stop-opacity:1" />
          </linearGradient>
          <linearGradient id="tag" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#1d4ed8;stop-opacity:1" />
          </linearGradient>
          <linearGradient id="border" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#1d4ed8;stop-opacity:1" />
          </linearGradient>
        </defs>
        
        <!-- Background -->
        <rect width="1200" height="630" fill="url(#bg)"/>
        <rect width="1200" height="630" fill="url(#overlay1)"/>
        <rect width="1200" height="630" fill="url(#overlay2)"/>
        
        <!-- Logo -->
        <rect x="560" y="175" width="80" height="80" rx="16" fill="url(#logo)" filter="drop-shadow(0 8px 32px rgba(59, 130, 246, 0.3))"/>
        <text x="600" y="225" text-anchor="middle" fill="white" font-family="Geist, Inter, system-ui, sans-serif" font-size="32" font-weight="bold" letter-spacing="2">H</text>
        
        <!-- Title -->
        <text x="600" y="320" text-anchor="middle" fill="#f8fafc" font-family="Geist, Inter, system-ui, sans-serif" font-size="64" font-weight="bold">${title}</text>
        
        <!-- Description -->
        <text x="600" y="380" text-anchor="middle" fill="#94a3b8" font-family="Geist, Inter, system-ui, sans-serif" font-size="32">${description}</text>
        
        <!-- Tags -->
        <g transform="translate(600, 450)">
          <rect x="-200" y="-15" width="120" height="30" rx="15" fill="url(#tag)"/>
          <text x="-140" y="5" text-anchor="middle" fill="white" font-family="Geist, Inter, system-ui, sans-serif" font-size="18" font-weight="600">Python</text>
          
          <rect x="-60" y="-15" width="180" height="30" rx="15" fill="url(#tag)"/>
          <text x="30" y="5" text-anchor="middle" fill="white" font-family="Geist, Inter, system-ui, sans-serif" font-size="18" font-weight="600">Machine Learning</text>
          
          <rect x="140" y="-15" width="60" height="30" rx="15" fill="url(#tag)"/>
          <text x="170" y="5" text-anchor="middle" fill="white" font-family="Geist, Inter, system-ui, sans-serif" font-size="18" font-weight="600">AI</text>
          
          <rect x="220" y="-15" width="140" height="30" rx="15" fill="url(#tag)"/>
          <text x="290" y="5" text-anchor="middle" fill="white" font-family="Geist, Inter, system-ui, sans-serif" font-size="18" font-weight="600">Data Science</text>
        </g>
        
        <!-- URL -->
        <text x="600" y="520" text-anchor="middle" fill="#64748b" font-family="Geist, Inter, system-ui, sans-serif" font-size="24" font-weight="500">himanshusalunke.vercel.app</text>
        
        <!-- Border -->
        <rect x="60" y="570" width="1080" height="3" fill="url(#border)" rx="2"/>
      </svg>
    `;

    return new Response(svg, {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (e) {
    console.log(`${e instanceof Error ? e.message : 'Unknown error'}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
} 