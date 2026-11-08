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
      return new Response(
        '**Anthropic API Notice:** `ANTHROPIC_API_KEY` is not configured in your environment variables. Please add it to your `.env.local` or hosting provider settings to activate live Claude streaming.',
        {
          status: 200,
          headers: { 'Content-Type': 'text/plain; charset=utf-8' },
        }
      );
    }

    const { message } = await request.json();

    if (!message || typeof message !== 'string') {
      return new Response('Invalid message format', { status: 400 });
    }

    // Create a streaming response with official Claude 3.5 Haiku model
    const stream = new ReadableStream({
      async start(controller) {
        try {
          const response = await client.messages.stream({
            model: 'claude-3-5-haiku-20241022',
            max_tokens: 300,
            system: `You are the Lead AI Systems Architect at ZLab Services (zlabservices.site), founded by Muhammad Zubair (EC-Council Certified Ethical Hacker, CEH, GPA 3.98).
ZLab Services specializes in engineering hardened multi-tenant AI SaaS, autonomous agent workflows (LangGraph/tool calling), and cross-platform Flutter mobile companions in 3-4 week production sprints.

CRITICAL - Keep responses SHORT and PUNCHY:
- Max 100-120 words
- One to two sentences max per idea
- Speak with technical authority (Postgres RLS, isolated vector memory, prompt injection defense, sandboxed tool calling)
- Focus on practical architecture and fast delivery

Shipped production projects:
- EverlearnAI: Full-Stack AI Study & Assessment Engine (Next.js 16 + Flutter + Claude API + Supabase RLS)
- DevPost AI: Multi-Tenant Content Automation Engine (Next.js + OpenAI + OAuth 2.0)
- AI Proposal Maker: Autonomous B2B RFP & Marketplace Proposal Agent (Next.js + Claude + Vector Matcher)

Answer like a senior engineer chatting 1-on-1 with a tech founder. Direct, helpful, zero fluff.`,
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
        } catch (error: any) {
          console.error('Claude Stream Error:', error);
          const errorMsg = error?.message || 'Error communicating with Claude API';
          controller.enqueue(
            new TextEncoder().encode(
              `\n\n**Claude API Error:** ${errorMsg}. Please check your Anthropic API credentials and credits.`
            )
          );
          controller.close();
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
  } catch (error: any) {
    console.error('API Error:', error);
    return new Response(
      error?.message || 'Internal server error while processing AI request',
      { status: 500 }
    );
  }
}
