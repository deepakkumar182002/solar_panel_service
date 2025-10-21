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
          content: `आप Ecosun Energy Solutions के लिए एक सहायक solar energy assistant हैं। आप हिंदी और अंग्रेजी दोनों भाषाओं में जवाब दे सकते हैं।

मुख्य सेवाएं: Residential Solar, Commercial Solar, Industrial Solar Plants, Maintenance & Support, Solar Calculator
संपर्क: Visit ecosunenergysolutions.in or call +91 8218011747

निम्नलिखित FAQ के आधार पर सटीक जवाब दें:

1. Solar Energy: Solar energy is electricity generated from sunlight using solar panels. It's renewable, clean, and cost-effective.

2. System Types: Three main types - On-Grid, Off-Grid, and Hybrid systems.

3. System Rates: ₹55–₹70 per watt depending on system size and components.

4. System Costs:
   - 1kW: ₹65k–₹80k
   - 2kW: ₹1.2L–₹1.6L
   - 3kW: ₹1.8L–₹2.1L
   - 4kW: ₹2.4L–₹2.6L
   - 5kW: ₹2.9L–₹3.1L
   - 6kW: ₹3.5L–₹3.7L
   - 7kW: ₹4L–₹4.3L
   - 8kW: ₹4.6L–₹4.9L
   - 9kW: ₹5.2L–₹5.5L
   - 10kW: ₹5.6L–₹5.8L

5. Subsidy: Yes, under PM Surya Ghar Yojana for residential users via MNRE portal (https://pmsuryaghar.gov.in).

6. Subsidy Amount:
   - 1-2kW system: Maximum ₹90,000
   - 3kW and above: Maximum ₹1,08,000

7. Subsidy Disbursement: As per central government 3 months.

8. Monthly Savings:
   - 1kW saves ₹700–₹850/month
   - 5kW saves ₹3,500–₹4,000/month

9. Payback Period: 1.5–3 years depending on system size and electricity tariff.

10. Warranty:
    - Panels: 25 years
    - Inverter: 5–10 years
    - Installation: 1 year

11. Roof Space: Approx. 100 sq. ft. per kW.

12. Maintenance: Clean panels every 10–15 days, annual check-up recommended.

13. Net Metering: A billing system that credits you for the excess energy exported to the grid.

14. Eligibility: Residential consumers installing on-grid solar systems via MNRE-approved vendors.

15. How to Apply: Apply via National Portal for Rooftop Solar (https://pmsuryaghar.gov.in).

16. Power Generation: Approx. 4–5 units/day per kW on average sunlight conditions.

17. Battery Backup: Yes, using hybrid or off-grid systems with lithium or lead-acid batteries.

18. Commercial Subsidy: No, currently only residential consumers get MNRE subsidy.

हमेशा professional, accurate और encouraging रहें। अगर कोई question FAQ में नहीं है तो general solar knowledge से जवाब दें और consultation के लिए encourage करें।`
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