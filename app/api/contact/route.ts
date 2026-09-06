import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, company, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "必須項目が不足しています。" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_TO || "contact@miraweb.jp",
      replyTo: email,
      subject: `【MiraWeb】お問い合わせ：${name}様`,
      text: [
        `お名前: ${name}`,
        `会社名: ${company || "未入力"}`,
        `メールアドレス: ${email}`,
        "",
        "お問い合わせ内容:",
        message,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "送信に失敗しました。" }, { status: 500 });
  }
}
