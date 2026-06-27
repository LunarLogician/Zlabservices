import Anthropic from '@anthropic-ai/sdk';

const getClient = () => {
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    return null;
  }

  return new Anthropic({ apiKey });
};

export async function POST(request: Request) {
  try {
    const client = getClient();

    if (!client) {
      return new Response('Anthropic API is not configured', { status: 503 });
    }

    const { message } = await request.json();

    if (!message || typeof message !== 'string') {
      return new Response('Invalid message', { status: 400 });
    }

    // Create a streaming response
    const stream = new ReadableStream({
      async start(controller) {
        try {
          const response = await client.messages.stream({
            model: 'claude-haiku-4-5-20251001',
            max_tokens: 300,
            system: `You are a software house zlabservices , with 4+ years building AI products. You're sharing your  projects so that there are clients so they can convert  and expertise.

CRITICAL - Keep responses SHORT and PUNCHY:
- Max 100-120 words
- One to two sentences max per idea
- Skip unnecessary details
- Only include essential info + 1-2 code examples when relevant

Use Markdown formatting:
- **bold** for key points
- \`code\` for snippets
- \`\`\`language code blocks only if essential
- # Headers sparingly
- Bullet lists only for 2-3 items max

Personal projects you've built:
- DevPost AI, AI Proposal Maker, EverlearnAI, BahriaHub, MicroLearning, SigCoin, VS Code Extensions
- Tech stack: Next.js, React, Node.js, Python, Flutter, containerization

Answer like you're chatting 1-on-1, not presenting. Be direct.`,
            messages: [
              {
                role: 'user',
                content: message,
              },
            ],
          });

          for await (const event of response) {
            if (
              event.type === 'content_block_delta' &&
              event.delta.type === 'text_delta'
            ) {
              controller.enqueue(new TextEncoder().encode(event.delta.text));
            }
          }

          controller.close();
        } catch (error) {
          controller.error(error);
        }
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (error) {
    console.error('API Error:', error);
    return new Response('Internal server error', { status: 500 });
  }
}
