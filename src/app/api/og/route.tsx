import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';
import React from 'react';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || 'Himanshu Salunke';
    const description = searchParams.get('description') || 'Aspiring Data Scientist & ML Engineer';

    return new ImageResponse(
      React.createElement(
        'div',
        {
          style: {
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0f172a',
            backgroundImage: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
            position: 'relative',
            fontFamily: 'Geist, Inter, system-ui, sans-serif',
          },
        },
        [
          React.createElement('div', {
            key: 'background',
            style: {
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)',
            },
          }),
          React.createElement(
            'div',
            {
              key: 'content',
              style: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '60px',
                zIndex: 1,
              },
            },
            [
              React.createElement(
                'div',
                {
                  key: 'logo',
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '80px',
                    height: '80px',
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 50%, #1e40af 100%)',
                    marginBottom: '40px',
                    boxShadow: '0 8px 32px rgba(59, 130, 246, 0.3)',
                  },
                },
                React.createElement('div', {
                  style: {
                    fontSize: '32px',
                    fontWeight: 'bold',
                    color: 'white',
                    letterSpacing: '2px',
                  },
                }, 'H')
              ),
              React.createElement('div', {
                key: 'title',
                style: {
                  fontSize: '64px',
                  fontWeight: 'bold',
                  color: '#f8fafc',
                  marginBottom: '20px',
                  lineHeight: 1.1,
                },
              }, title),
              React.createElement('div', {
                key: 'description',
                style: {
                  fontSize: '32px',
                  color: '#94a3b8',
                  marginBottom: '40px',
                  maxWidth: '800px',
                  lineHeight: 1.4,
                },
              }, description),
              React.createElement(
                'div',
                {
                  key: 'tags',
                  style: {
                    display: 'flex',
                    gap: '16px',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    marginBottom: '40px',
                  },
                },
                [
                  React.createElement('div', {
                    key: 'python',
                    style: {
                      padding: '8px 16px',
                      borderRadius: '20px',
                      background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                      color: 'white',
                      fontSize: '18px',
                      fontWeight: '600',
                    },
                  }, 'Python'),
                  React.createElement('div', {
                    key: 'ml',
                    style: {
                      padding: '8px 16px',
                      borderRadius: '20px',
                      background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                      color: 'white',
                      fontSize: '18px',
                      fontWeight: '600',
                    },
                  }, 'Machine Learning'),
                  React.createElement('div', {
                    key: 'ai',
                    style: {
                      padding: '8px 16px',
                      borderRadius: '20px',
                      background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                      color: 'white',
                      fontSize: '18px',
                      fontWeight: '600',
                    },
                  }, 'AI'),
                  React.createElement('div', {
                    key: 'ds',
                    style: {
                      padding: '8px 16px',
                      borderRadius: '20px',
                      background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                      color: 'white',
                      fontSize: '18px',
                      fontWeight: '600',
                    },
                  }, 'Data Science'),
                ]
              ),
              React.createElement('div', {
                key: 'url',
                style: {
                  fontSize: '24px',
                  color: '#64748b',
                  fontWeight: '500',
                },
              }, 'himanshusalunke.vercel.app'),
            ]
          ),
          React.createElement('div', {
            key: 'border',
            style: {
              position: 'absolute',
              bottom: '60px',
              left: '60px',
              right: '60px',
              height: '3px',
              background: 'linear-gradient(90deg, #3b82f6 0%, #1d4ed8 100%)',
              borderRadius: '2px',
            },
          }),
        ]
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    console.log(`${e instanceof Error ? e.message : 'Unknown error'}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
} 