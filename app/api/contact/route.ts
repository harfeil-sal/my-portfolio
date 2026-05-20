import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    const gmailUser = process.env.GMAIL_USER;
    // Strip spaces — Gmail shows the app password with spaces in the UI but SMTP requires no spaces
    const gmailPass = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, '');

    if (!gmailUser || !gmailPass) {
      console.error('[contact] Missing GMAIL_USER or GMAIL_APP_PASSWORD env vars');
      return NextResponse.json({ error: 'Server email configuration is missing.' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${gmailUser}>`,
      to: gmailUser,
      replyTo: email,
      subject: `Portfolio Contact — ${name}`,
      html: `
        <div style="font-family:monospace;max-width:600px;margin:auto;background:#0f0f11;color:#e4e4e7;padding:40px;border-radius:16px;border:1px solid #27272a;">
          <h2 style="color:#3b82f6;margin-top:0;">New message from your portfolio</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:8px 0;color:#71717a;width:80px;">From</td>
              <td style="padding:8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#71717a;">Reply-to</td>
              <td style="padding:8px 0;"><a href="mailto:${email}" style="color:#3b82f6;">${email}</a></td>
            </tr>
          </table>
          <hr style="border:none;border-top:1px solid #27272a;margin:24px 0;" />
          <p style="white-space:pre-wrap;line-height:1.7;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[contact] Failed to send email:', err);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
