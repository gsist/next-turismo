// src/app/api/send-email/route.ts
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { nome, email, mensagem } = await request.json();

    console.log('📨 Recebida requisição de:', nome, email);

    const transporter = nodemailer.createTransport({
      host: 'server18.mailgrid.com.br',
      port: 587,
      secure: false, // STARTTLS
      requireTLS: true, // Força TLS
      auth: {
        user: 'jaboatao@smtp.jaboatao.pe.gov.br',
        pass: 'mk5rS%Mp5H98',
      },
      debug: true,
      logger: true,
      connectionTimeout: 10000, // 10 segundos
      greetingTimeout: 10000,
      socketTimeout: 15000,
    });

    // Testa a conexão
    console.log('🔌 Testando conexão SMTP...');
    await transporter.verify();
    console.log('✅ Conexão SMTP OK!');

    // Opção 1: Enviar COM autenticação (usuário/senha do SMTP)
    const mailOptions = {
      from: `"Site Jaboatão" <jaboatao@smtp.jaboatao.pe.gov.br>`, 
      to: 'larissa.machado@jaboatao.pe.gov.br',
      subject: `Nova mensagem de ${nome}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>Nova mensagem do site</h2>
          <p><strong>Nome:</strong> ${nome}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensagem:</strong></p>
          <p>${mensagem.replace(/\n/g, '<br>')}</p>
          <hr />
          <p><small>Responder para: ${email}</small></p>
        </div>
      `,
      replyTo: email,
      headers: {
        'X-Priority': '3',
        'X-Mailer': 'Site Jaboatão'
      }
    };

    console.log('📤 Enviando email para:', mailOptions.to);
    console.log('📧 FROM:', mailOptions.from);
    
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email enviado! MessageId:', info.messageId);
    console.log('📊 Resposta:', info.response);
    
    return NextResponse.json({ 
      success: true, 
      messageId: info.messageId,
      response: info.response 
    });
    
  } catch (error) {
    console.error('❌ ERRO DETALHADO:', error);
    
    // Informações mais detalhadas do erro
    let errorMessage = 'Erro ao enviar email';
    if (error instanceof Error) {
      errorMessage = error.message;
      console.error('Stack:', error.stack);
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}