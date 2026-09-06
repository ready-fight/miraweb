# MiraWeb Next.js版

既存のMiraWeb静的サイトを Next.js App Router + TypeScript に変換したプロジェクトです。

## 起動

```bash
npm install
cp .env.example .env.local
npm run dev
```

ブラウザで `http://localhost:3000` を開いてください。

## お問い合わせフォーム

`app/api/contact/route.ts` から Nodemailer を使ってメールを送信します。
`.env.local` に利用するメールサーバーの SMTP 情報を設定してください。
送信先の初期値は `contact@miraweb.jp` です。

```env
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=contact@miraweb.jp
SMTP_PASS=your-password
MAIL_FROM=contact@miraweb.jp
CONTACT_TO=contact@miraweb.jp
```

## 画像

8件の制作実績画像は `public/images/` に入っています。すべて今回のMiraWeb用に用意した画像です。

## 構成

- `/` 一枚構成の会社・制作実績サイト
- `/privacy` プライバシーポリシー
- `/api/contact` お問い合わせメール送信
"# miraweb" 
