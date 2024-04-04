//import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL

export async function POST(req, res) {
    const body = await req.json();
    const {email, subject, message} = body;
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ['albertos@somoza-labs.com'],
      subject: "Nuevo Mensaje del Portafolio",
      react: (<>
        <p>Ponte en contacto con este usuario: {email}</p>
        <p>Contenido:</p>
        <h1>{subject}</h1>
        <p>{message}</p>
      </>),
    });

    return NextResponse.json({status: 200});
  } catch (error) {
    return NextResponse.json({ error });
  }
}
