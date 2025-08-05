

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || 'Himanshu Salunke';
    const description = searchParams.get('description') || 'Aspiring Data Scientist & ML Engineer';

    const svg = `
      <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#0f172a;stop-opacity:1" />
            <stop offset="50%" style="stop-color:#1e293b;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#334155;stop-opacity:1" />
          </linearGradient>
          <radialGradient id="glow1" cx="20%" cy="20%" r="60%">
            <stop offset="0%" style="stop-color:rgba(59,130,246,0.15);stop-opacity:1" />
            <stop offset="100%" style="stop-color:rgba(59,130,246,0);stop-opacity:1" />
          </radialGradient>
          <radialGradient id="glow2" cx="80%" cy="80%" r="60%">
            <stop offset="0%" style="stop-color:rgba(59,130,246,0.1);stop-opacity:1" />
            <stop offset="100%" style="stop-color:rgba(59,130,246,0);stop-opacity:1" />
          </radialGradient>
          <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#1d4ed8;stop-opacity:1" />
          </linearGradient>
        </defs>
        
        <!-- Background -->
        <rect width="1200" height="630" fill="url(#bg)"/>
        <rect width="1200" height="630" fill="url(#glow1)"/>
        <rect width="1200" height="630" fill="url(#glow2)"/>
        
        <!-- Main content container -->
        <g transform="translate(600, 315)">
          <!-- Logo circle -->
          <circle cx="0" cy="-120" r="50" fill="url(#accent)" filter="drop-shadow(0 8px 32px rgba(59, 130, 246, 0.4))"/>
          <text x="0" y="-110" text-anchor="middle" fill="white" font-family="Geist, Inter, system-ui, sans-serif" font-size="36" font-weight="bold">H</text>
          
          <!-- Title -->
          <text x="0" y="-20" text-anchor="middle" fill="#f8fafc" font-family="Geist, Inter, system-ui, sans-serif" font-size="72" font-weight="bold" letter-spacing="-1">${title}</text>
          
          <!-- Description -->
          <text x="0" y="40" text-anchor="middle" fill="#94a3b8" font-family="Geist, Inter, system-ui, sans-serif" font-size="28" font-weight="400">${description}</text>
          
          <!-- Skills row -->
          <g transform="translate(0, 100)">
            <rect x="-280" y="-20" width="120" height="40" rx="20" fill="url(#accent)" opacity="0.9"/>
            <text x="-220" y="5" text-anchor="middle" fill="white" font-family="Geist, Inter, system-ui, sans-serif" font-size="16" font-weight="600">Python</text>
            
            <rect x="-140" y="-20" width="140" height="40" rx="20" fill="url(#accent)" opacity="0.9"/>
            <text x="-70" y="5" text-anchor="middle" fill="white" font-family="Geist, Inter, system-ui, sans-serif" font-size="16" font-weight="600">ML/AI</text>
            
            <rect x="10" y="-20" width="120" height="40" rx="20" fill="url(#accent)" opacity="0.9"/>
            <text x="70" y="5" text-anchor="middle" fill="white" font-family="Geist, Inter, system-ui, sans-serif" font-size="16" font-weight="600">Data Science</text>
            
            <rect x="140" y="-20" width="100" height="40" rx="20" fill="url(#accent)" opacity="0.9"/>
            <text x="190" y="5" text-anchor="middle" fill="white" font-family="Geist, Inter, system-ui, sans-serif" font-size="16" font-weight="600">Web Dev</text>
          </g>
          
          <!-- URL -->
          <text x="0" y="180" text-anchor="middle" fill="#64748b" font-family="Geist, Inter, system-ui, sans-serif" font-size="20" font-weight="500">himanshusalunke.vercel.app</text>
        </g>
        
        <!-- Decorative elements -->
        <circle cx="100" cy="100" r="3" fill="#3b82f6" opacity="0.6"/>
        <circle cx="1100" cy="150" r="2" fill="#3b82f6" opacity="0.4"/>
        <circle cx="150" cy="500" r="2" fill="#3b82f6" opacity="0.5"/>
        <circle cx="1050" cy="480" r="3" fill="#3b82f6" opacity="0.3"/>
      </svg>
    `;

    return new Response(svg, {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    });
  } catch (e) {
    console.log(`${e instanceof Error ? e.message : 'Unknown error'}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
} 