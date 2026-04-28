import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { nome, email, mensagem } = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['contato@ipsm.jaboatao.pe.gov.br'],
      subject: `Nova mensagem de ${nome}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #0044CA;">Nova mensagem do site</h2>
          <p><strong>Nome:</strong> ${nome}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensagem:</strong></p>
          <p style="background: #f5f5f5; padding: 15px; border-radius: 8px;">${mensagem}</p>
          <hr />
          <p style="color: #666; font-size: 12px;">Responda diretamente para: ${email}</p>
        </div>
      `,
      replyTo: email,  // ← CORRIGIDO: replyTo com T maiúsculo
    });

    if (error) {
      console.error('Erro Resend:', error);
      return NextResponse.json({ error: 'Erro ao enviar' }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Erro geral:', error);
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 });
  }
}