import { Resend } from 'resend';

export async function POST(req: Request) {
  const body = await req.json();

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const data = await resend.emails.send({
      from: body.email,
      to: process.env.WAIT_LIST_EMAIL ?? '',
      subject: 'New waitlist submission',
      html: `<p><strong>${body.company}</strong> just joined the waitlist with email: ${body.email}</p>`
    });

    return Response.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false, error });
  }
}
