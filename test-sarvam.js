const fetch = require('node-fetch'); // Next.js comes with global fetch, but node 18+ does too. Let's rely on node 18 global fetch.

async function test() {
  const apiKey = 'sk_5he14m1r_QjlfOccHQRzjzSuXyCTlc6Xu';
  
  const systemPromptContent = "You are the Lead Strategist at AppVenture.";
  const messages = [
    { role: 'system', content: systemPromptContent },
    { role: 'assistant', content: "Hi! How can I help?" },
    { role: 'user', content: "I want an AI dashboard." }
  ];

  try {
    const response = await fetch("https://api.sarvam.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'sarvam-105b', // Let's try 105b and 'sarvam-m' to see what gives
        messages: messages,
      }),
    });

    if (!response.ok) {
        console.error("Error from Sarvam:", await response.text());
    } else {
        console.log("Success:", await response.json());
    }
  } catch(e) {
    console.error("Fetch Exception:", e);
  }
}

test();
