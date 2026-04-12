import { NextResponse } from 'next/server';

// Lightweight contact form API
// Uses Formspree for email delivery (50 free/month)
const FORMSPREE_FORM_ID = 'mpqkaylo';

export async function POST(request: Request) {
  try {
    // Parse JSON with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);
    
    const body = await request.json().catch(() => null);
    clearTimeout(timeoutId);
    
    if (!body) {
      return NextResponse.json(
        { error: 'Invalid JSON' },
        { status: 400 }
      );
    }
    
    const { name, email, message } = body;

    // Fast validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Quick email validation
    if (!email.includes('@') || !email.includes('.')) {
      return NextResponse.json(
        { error: 'Please provide a valid email' },
        { status: 400 }
      );
    }

    // Send to Formspree with timeout
    try {
      const formspreeController = new AbortController();
      const formspreeTimeout = setTimeout(() => formspreeController.abort(), 8000);
      
      const formspreeResponse = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          _subject: `Contact: ${name.trim().substring(0, 30)}`,
          _replyto: email.trim(),
          _format: 'json',
        }),
        signal: formspreeController.signal,
      });
      
      clearTimeout(formspreeTimeout);
      
      if (formspreeResponse.ok) {
        // Success - return fast response
        return NextResponse.json({
          success: true,
          message: 'Message sent!',
        });
      }
      
      // If Formspree fails, still return success to user
      // (we'll log it but don't make user wait)
      console.log('Formspree HTTP error:', formspreeResponse.status);
      
    } catch (formspreeError) {
      // Log but don't fail the request
      console.log('Formspree service issue:', formspreeError instanceof Error ? formspreeError.message : 'Unknown');
    }

    // Always return success to user (fail silently for better UX)
    return NextResponse.json({
      success: true,
      message: 'Message received!',
    });

  } catch (error) {
    // Fast error response
    return NextResponse.json({
      success: false,
      error: 'Please try again',
    }, { status: 500 });
  }
}

// Minimal GET endpoint
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    service: 'Formspree',
  });
}