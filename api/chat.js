import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "आप Ecosun Energy Solutions के लिए एक सहायक solar energy assistant हैं। आप हिंदी और अंग्रेजी दोनों भाषाओं में जवाब दे सकते हैं। आपको solar energy, installations, costs, maintenance, benefits के बारे में सटीक और उपयोगी जानकारी देनी चाहिए। मुख्य सेवाएं: Residential Solar, Commercial Solar, Industrial Solar Plants, Maintenance & Support, Solar Calculator। कीमत के बारे में पूछने पर बताएं कि costs vary करती है और accurate quotes के लिए consultation recommend करें। हमेशा professional और encouraging रहें।"
        },
        {
          role: "user", 
          content: message
        }
      ],
      max_tokens: 200,
      temperature: 0.8,
    });

    const reply = completion.choices[0]?.message?.content || "Sorry, I couldn't generate a response.";
    
    res.status(200).json({ message: reply });
  } catch (error) {
    console.error('OpenAI API error:', error);
    res.status(500).json({ 
      error: 'Failed to process your request. Please try again later.',
      message: 'क्षमा करें, कुछ तकनीकी समस्या हो रही है। कृपया बाद में पुनः प्रयास करें।'
    });
  }
}