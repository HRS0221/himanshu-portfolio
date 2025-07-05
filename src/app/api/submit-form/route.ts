import { NextResponse } from 'next/server';

// This reads the secret URL you stored in Vercel's Environment Variables
const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

export async function POST(request: Request) {
  // Check if the Slack Webhook URL is set up correctly
  if (!SLACK_WEBHOOK_URL) {
    return NextResponse.json({ error: 'Slack Webhook URL is not configured.' }, { status: 500 });
  }

  try {
    // 1. Get the form data from the frontend's request
    const submission = await request.json();
    const { name, email, message } = submission;

    // 2. Format the data into a nice-looking Slack message using "Block Kit"
    const slackMessage = {
      blocks: [
        {
          type: 'header',
          text: {
            type: 'plain_text',
            text: '📬 New Portfolio Message',
            emoji: true,
          },
        },
        {
          type: 'divider',
        },
        {
          type: 'section',
          fields: [
            {
              type: 'mrkdwn',
              text: `*From:*\n${name}`,
            },
            {
              type: 'mrkdwn',
              text: `*Email:*\n${email}`,
            },
          ],
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `*Message:*\n${message}`,
          },
        },
        {
          type: 'context',
          elements: [
            {
              type: 'plain_text',
              text: `Received on: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })}`,
              emoji: true,
            },
          ],
        },
      ],
    };

    // 3. Send the message to your secret Slack Webhook URL
    await fetch(SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(slackMessage),
    });

    // 4. Send a success response back to your frontend form
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Failed to process request:', error);
    return NextResponse.json({ error: 'Failed to process request.' }, { status: 500 });
  }
}