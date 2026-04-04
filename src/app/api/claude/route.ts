import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || 'ANTHROPIC_API_KEY_REMOVED',
});

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== 'string') {
      return new Response('Invalid message', { status: 400 });
    }

    // Create a streaming response
    const stream = new ReadableStream({
      async start(controller) {
        try {
          const response = await client.messages.stream({
            model: 'claude-3-sonnet-20240229',
            max_tokens: 1024,
            system: `You are an expert full-stack developer and AI startup founder. You help people build AI-powered SaaS products, mobile apps, and scalable systems. 
            
Your background:
- 4+ years building production AI products
- Expert in: Next.js, React, Node.js, Python, Flutter, Docker, AWS, PostgreSQL
- Founder of ZLab AI Studio
- Created 15+ live products with 100K+ downloads
- 3K+ active users across projects

When answering:
1. Be concise but comprehensive (max 200 words)
2. Provide practical, code-ready solutions
3. Focus on what actually works in production
4. Be helpful without over-explaining
5. Use markdown formatting for code snippets`,
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
