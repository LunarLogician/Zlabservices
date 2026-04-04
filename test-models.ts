import Anthropic from '@anthropic-ai/sdk';

if (!process.env.ANTHROPIC_API_KEY) {
  console.error('Error: ANTHROPIC_API_KEY environment variable is not set');
  process.exit(1);
}

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

async function listModels() {
  try {
    console.log('Testing available models...\n');
    
    const models = [
      'claude-3-opus-20240229',
      'claude-3-sonnet-20240229',
      'claude-3-haiku-20240307',
      'claude-3-5-sonnet-20241022',
      'claude-opus-4-1-20250805',
      'claude-sonnet-4-20250514',
    ];

    for (const model of models) {
      try {
        console.log(`Testing model: ${model}...`);
        const response = await client.messages.create({
          model: model,
          max_tokens: 100,
          messages: [
            {
              role: 'user',
              content: 'Say "works"',
            },
          ],
        });
        console.log(`✅ ${model} - WORKS\n`);
      } catch (error: any) {
        console.log(`❌ ${model} - ERROR: ${error.status} ${error.message}\n`);
      }
    }
  } catch (error) {
    console.error('Fatal error:', error);
  }
}

listModels();
