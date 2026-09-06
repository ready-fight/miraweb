import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="privacy-page">
      <article className="privacy-card">
        <h1>プライバシーポリシー</h1>
        <p>MiraWebは、お問い合わせ等を通じて取得した個人情報を適切に取り扱います。</p>
        <h2>個人情報の利用目的</h2>
        <p>取得した情報は、お問い合わせへの回答、ご提案、お見積り、業務上必要なご連絡のために利用します。</p>
        <h2>第三者への提供</h2>
        <p>法令に基づく場合を除き、ご本人の同意なく個人情報を第三者へ提供しません。</p>
        <h2>お問い合わせ</h2>
        <p>個人情報の取り扱いに関するお問い合わせは、contact@miraweb.jp までご連絡ください。</p>
        <Link className="privacy-back" href="/">← トップページへ戻る</Link>
      </article>
    </main>
  );
}
