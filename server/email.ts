import { MailService } from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  console.warn("SENDGRID_API_KEY environment variable not set - email functionality will be disabled");
}

const mailService = new MailService();
if (process.env.SENDGRID_API_KEY) {
  mailService.setApiKey(process.env.SENDGRID_API_KEY);
}

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  try {
    if (!process.env.SENDGRID_API_KEY) {
      console.log("Email would be sent:", params);
      return true; // Simulate success when no API key
    }

    await mailService.send({
      to: params.to,
      from: params.from,
      subject: params.subject,
      text: params.text || '',
      html: params.html || '',
    });
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}

export async function sendContactMessage(
  name: string,
  email: string,
  subject: string | null,
  message: string
): Promise<boolean> {
  const emailSubject = subject 
    ? `FireHawk Contact: ${subject}` 
    : 'FireHawk Contact Form Submission';
    
  const emailText = `
New contact form submission from FireHawk website:

Name: ${name}
Email: ${email}
Subject: ${subject || 'No subject'}

Message:
${message}

---
Sent from FireHawk Drone Project website
  `.trim();

  const emailHtml = `
    <h2>New Contact Form Submission</h2>
    <p><strong>From:</strong> ${name} (${email})</p>
    <p><strong>Subject:</strong> ${subject || 'No subject'}</p>
    <div>
      <strong>Message:</strong>
      <p style="white-space: pre-wrap; margin-top: 10px; padding: 15px; background-color: #f5f5f5; border-left: 4px solid #007bff;">${message}</p>
    </div>
    <hr>
    <p style="color: #666; font-size: 12px;">Sent from FireHawk Drone Project website</p>
  `;

  return sendEmail({
    to: 'ronosmani29@gmail.com',
    from: 'noreply@firehawk-drone.com', // This would need to be verified with SendGrid
    subject: emailSubject,
    text: emailText,
    html: emailHtml,
  });
}