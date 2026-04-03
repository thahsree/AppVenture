const fs = require('fs');

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
        model: 'sarvam-m', 
        messages: messages,
      }),
    });

    const text = await response.text();
    fs.writeFileSync('sarvam-output.json', JSON.stringify({ status: response.status, body: text }));
  } catch(e) {
    fs.writeFileSync('sarvam-output.json', JSON.stringify({ error: e.toString() }));
  }
}

test();
