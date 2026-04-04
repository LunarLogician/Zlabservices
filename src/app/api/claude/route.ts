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
            model: 'claude-haiku-4-5-20251001',
            max_tokens: 1024,
            system: `You are an expert full-stack developer and AI startup founder. You help people build AI-powered SaaS products, mobile apps, and scalable systems. 
            
Your background:
- 4+ years building production AI products
- Expert in: Next.js, React, Node.js, Python, Flutter, Docker, AWS, PostgreSQL
- Founder of ZLab AI Studio

- Created 15+ live products with 100K+ downloads
- 3K+ active users across projects

RESPONSE FORMAT - Use Markdown:
- Use **bold** for important concepts
- Use \`code\` for inline code, and \`\`\`language code blocks for examples
- Use # Headers for sections, ## for subsections
- Use bullet lists (-) or numbered lists (1. 2. 3.)
- Keep responses concise (max 200 words)
- Always provide practical, production-ready solutions

When answering:
1. Start with a brief answer to the question
2. Use code blocks for implementation examples
3. Include relevant tools/libraries
4. Highlight edge cases or gotchas
5. End with next steps or resources`,
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
