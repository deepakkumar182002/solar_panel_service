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
    const { name, email, phone, message, service } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Email content
    const emailContent = `
New Contact Form Submission from EcoSun Energy Solutions Website:

Name: ${name}
Email: ${email}
Phone: ${phone}
${service ? `Service: ${service}` : ''}
Message: ${message}

---
This email was sent from the contact form on ecosunenergysolutions.in
    `.trim();

    // For now, we'll use a simple fetch to send via a third-party service
    // You can replace this with SendGrid, Nodemailer, or any email service
    
    // Using Web3Forms to send email
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: 'b26b0bc3-0d19-4b49-98ca-ebb9ec7e090e',
        name: name,
        email: 'info@ecosunenergysolutions.in',
        subject: 'New Contact Form Submission - EcoSun Energy',
        message: emailContent,
        from_name: 'EcoSun Energy Website',
        replyto: email,
      }),
    });

    const data = await response.json();

    if (data.success) {
      res.status(200).json({ 
        success: true, 
        message: 'Email sent successfully' 
      });
    } else {
      throw new Error('Failed to send email');
    }

  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ 
      error: 'Failed to send email',
      message: 'कृपया बाद में पुनः प्रयास करें या सीधे हमसे संपर्क करें।'
    });
  }
}
