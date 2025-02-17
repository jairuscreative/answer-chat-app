// app/api/exaanswer/route.ts
import { NextRequest } from 'next/server';
import Exa from "exa-js";

export const maxDuration = 60;
export const dynamic = 'force-dynamic';

const exa = new Exa(process.env.EXA_API_KEY as string);

export async function POST(req: NextRequest) {
  try {
    const { query } = await req.json();

    if (!query) {
      return new Response(
        JSON.stringify({ error: 'query is required' }), 
        { status: 400 }
      );
    }

    // Get the response from Exa
    const stream = exa.streamAnswer(query, {
      model: "exa-pro"
    });

    // Set up the response headers
    const encoder = new TextEncoder();
    const customStream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            // Log the chunk for debugging
            console.log('Received chunk:', chunk);
            
            // Format the chunk to match the expected structure
            const formattedChunk = {
              choices: [{
                delta: {
                  content: chunk.content
                }
              }]
            };
            
            // If there are citations, send them as a separate chunk
            if (chunk.citations && chunk.citations.length > 0) {
              console.log('Sending citations:', chunk.citations);
              controller.enqueue(encoder.encode(JSON.stringify({ citations: chunk.citations }) + '\n'));
            }
            
            // Send the content chunk
            controller.enqueue(encoder.encode(JSON.stringify(formattedChunk) + '\n'));
          }
          controller.close();
        } catch (error) {
          console.error('Streaming error:', error);
          controller.error(error);
        }
      },
    });

    // Return the streaming response
    return new Response(customStream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (error: any) {
    return new Response(
      JSON.stringify({ error: `Failed to perform search | ${error.message}` }), 
      { status: 500 }
    );
  }
}