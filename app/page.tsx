"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import type { ReactNode } from "react";

const services = [
  ["予約システム", "店舗・施設・人の予約を、見やすくスムーズに管理。", "▣"],
  ["顧客管理システム", "顧客情報を一元管理し、営業・対応を効率化。", "●"],
  ["業務の自動化", "繰り返し作業を自動化し、時間とコストを削減。", "⚙"],
  ["データ連携", "既存システムや外部サービスとの連携を実現。", "◉"],
  ["報告・点検システム", "現場帳票をデジタル化し、報告業務を効率化。", "▤"],
  ["EC・通販システム", "商品販売・決済・在庫管理までまとめて構築。", "▰"],
  ["タスク管理システム", "業務の進捗を見える化し、チームの生産性を向上。", "☑"],
  ["管理画面・業務システム", "業務に合わせた使いやすい管理画面を開発。", "▭"],
] as const;

const projects = [
  {
    title: "病院設備点検システム",
    description: "点検・報告書作成をタブレットで完結。紙の運用から完全ペーパーレス化。",
    tags: ["医療・福祉", "業務効率化"],
    image: "/images/hospital-inspection.jpg",
  },
  {
    title: "美容サロン予約システム",
    description: "店舗検索・予約・決済・顧客管理までを一元化。複数店舗にも対応。",
    tags: ["美容・サロン", "予約・決済"],
    image: "/images/salon-reservation.jpg",
  },
  {
    title: "店舗運営タスク管理システム",
    description: "カンバン・時間軸・日別表示を組み合わせ、店舗業務の流れを見える化。",
    tags: ["小売・飲食", "タスク管理"],
    image: "/images/store-task-management.jpg",
  },
  {
    title: "EC・会員管理サイト",
    description: "会員登録・商品販売・決済・マイページまでを備えたECサイト。",
    tags: ["EC・通販", "会員管理"],
    image: "/images/ec-membership.jpg",
  },
  {
    title: "社内申請・承認ワークフロー",
    description: "申請から承認までをオンライン化し、社内手続きをスムーズに。",
    tags: ["企業・団体", "業務効率化"],
    image: "/images/approval-workflow.jpg",
  },
  {
    title: "作業報告書作成システム",
    description: "現場の作業報告をスマートフォンで入力・送信。写真・署名にも対応。",
    tags: ["建設・設備", "現場業務"],
    image: "/images/work-report.jpg",
  },
  {
    title: "在庫・備品管理システム",
    description: "在庫・備品の入出庫を一元管理し、発注や棚卸しの手間を軽減。",
    tags: ["製造・物流", "在庫管理"],
    image: "/images/inventory-management.jpg",
  },
  {
    title: "予約カレンダー連携システム",
    description: "外部カレンダーと連携し、予約枠の自動調整・管理を実現。",
    tags: ["サービス", "予定管理"],
    image: "/images/calendar-integration.jpg",
  },
] as const;

const faqs = [
  [
    "どのような業種のシステム開発に対応していますか？",
    "業種を限定せず、予約、点検・報告、顧客管理、タスク管理、通販、社内業務など幅広く対応しています。",
  ],
  ["見積もりは無料ですか？", "はい。内容をお伺いしたうえで、必要な機能と費用の目安をご案内します。"],
  [
    "開発期間はどのくらいかかりますか？",
    "小規模なシステムは数週間、機能の多いシステムは1〜3か月程度が目安です。内容に応じて個別にご案内します。",
  ],
  [
    "既存システムとの連携は可能ですか？",
    "はい。外部サービス連携、データ移行、既存システムとの接続などもご相談いただけます。",
  ],
] as const;

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setMessage("");

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("send failed");

      form.reset();
      setMessage("お問い合わせを受け付けました。ありがとうございます。");
    } catch {
      setMessage("送信できませんでした。contact@miraweb.jp まで直接ご連絡ください。");
    } finally {
      setSending(false);
    }
  }

  return (
    <main>
      <header>
        <a className="logo" href="#top" aria-label="MiraWeb トップへ">
          <span className="mark" aria-hidden="true"><i /><i /><i /></span>
          MiraWeb
          <span className="tagline">システムで、<br />はたらくを、もっとよくする。</span>
        </a>
        <nav aria-label="メインメニュー">
          <a href="#services">事業内容</a>
          <a href="#works">制作実績</a>
          <a href="#reason">選ばれる理由</a>
          <a href="#faq">よくあるご質問</a>
          <a href="#contact">お問い合わせ</a>
        </nav>
        <a className="contact-btn" href="#contact">お問い合わせ</a>
      </header>

      <section className="hero" id="top">
        <div className="copy">
          <p className="eyebrow">現場の課題に、最適なシステムを。</p>
          <h1>業務に寄り添う<br />システム開発で、<br /><span>はたらくをもっとスムーズに。</span></h1>
          <p className="lead">MiraWebは、業務の効率化・自動化・デジタル化を通じて、企業や店舗の課題を解決するシステム開発を行っています。現場の声を大切に、使いやすく、成果につながるシステムをご提案します。</p>
          <div className="buttons">
            <a className="btn primary" href="#contact">まずは相談してみる　→</a>
            <a className="btn secondary" href="#services">事業内容を見る</a>
          </div>
        </div>

        <div className="diagram" aria-hidden="true">
          <div className="ring r1" /><div className="ring r2" /><div className="ring r3" />
          <div className="center"><b>MiraWeb</b><small>システム開発</small></div>
          <div className="node n1">予約・<br />スケジュール</div>
          <div className="node n2">顧客管理</div>
          <div className="node n3">業務の自動化</div>
          <div className="node n4">データ連携</div>
          <div className="node n5">タスク管理</div>
          <div className="node n6">管理画面</div>
          <div className="node n7">EC・通販</div>
          {/* <div className="node n8">報告・点検</div> */}
        </div>

        <div className="city" aria-hidden="true">
          <div className="hand">システムで<br />現場の可能性をひらく。</div>
          <div className="skyline">
            {Array.from({ length: 18 }).map((_, index) => (
              <i key={index} style={{ height: `${50 + ((index * 17) % 110)}px` }} />
            ))}
          </div>
        </div>
      </section>

      <section className="content" id="services">
        <SectionHeading title="制作できるシステム" text="業種・業務を問わず、幅広いシステム開発に対応しています。" link="#contact" linkText="ご相談はこちら　→" />
        <div className="service-grid">
          {services.map(([title, description, icon]) => (
            <article className="service" key={title}>
              <div className="service-icon" aria-hidden="true">{icon}</div>
              <div><h3>{title}</h3><p>{description}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="content works" id="works">
        <SectionHeading title="制作実績" text="さまざまな業種・業務の課題を、システムの力で解決してきました。" link="#contact" linkText="制作のご相談はこちら　→" />
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project" key={project.title}>
              <div className="visual">
                <Image src={project.image} alt={`${project.title}のイメージ`} fill sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 25vw" />
              </div>
              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="reason" id="reason">
        <div><h2>選ばれる理由</h2><p className="reason-copy">見た目だけではなく、実際の業務で使いやすいこと。<br />MiraWebは「現場で本当に役立つか」を大切にしています。</p></div>
        <div className="reason-grid">
          <Reason number="01" title="業務に合わせた設計">既製品に業務を合わせるのではなく、必要な流れから設計します。</Reason>
          <Reason number="02" title="相談から開発まで一貫対応">要件整理・設計・開発・改善まで、わかりやすく伴走します。</Reason>
          <Reason number="03" title="小さく始めて育てられる">必要な機能から始め、実際の運用に合わせて拡張できます。</Reason>
        </div>
      </section>

      <section className="content">
        <SectionHeading title="ご相談の流れ" text="初めての方でも安心してご相談いただけるよう、シンプルな流れでご案内します。" />
        <div className="flow-grid">
          <Flow number="01" icon="💬" title="ヒアリング">現状の課題やご要望を詳しくお伺いします。</Flow>
          <Flow number="02" icon="▤" title="ご提案・お見積り">最適な解決策とお見積りをご提示します。</Flow>
          <Flow number="03" icon="⚙" title="開発・テスト">設計から開発・テストまで丁寧に進めます。</Flow>
          <Flow number="04" icon="◇" title="納品・運用サポート">納品後も安心の運用サポートをご提供します。</Flow>
        </div>
      </section>

      <section className="bottom">
        <div id="faq">
          <h2>よくあるご質問</h2>
          <p className="small">よくいただくご質問をまとめました。</p>
          {faqs.map(([question, answer], index) => (
            <div className="faq-item" key={question}>
              <button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                <span>{question}</span><b>{openFaq === index ? "−" : "＋"}</b>
              </button>
              {openFaq === index && <div className="faq-answer">{answer}</div>}
            </div>
          ))}
        </div>

        <div className="contact" id="contact">
          <h2>お問い合わせ</h2>
          <p className="small">システムに関するご相談・お見積りなど、お気軽にお問い合わせください。</p>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <label>お名前<input name="name" required placeholder="例）山田 太郎" /></label>
              <label>会社名<input name="company" placeholder="例）株式会社〇〇" /></label>
            </div>
            <label>メールアドレス<input type="email" name="email" required placeholder="例）taro@example.jp" /></label>
            <label>お問い合わせ内容<textarea name="message" required placeholder="ご相談内容をご入力ください" /></label>
            <button type="submit" disabled={sending}>{sending ? "送信中…" : "送信する　→"}</button>
            {message && <p className="form-message" role="status">{message}</p>}
          </form>
        </div>
      </section>

      <footer>
        <div className="logo"><span className="mark" aria-hidden="true"><i /><i /><i /></span>MiraWeb</div>
        <div className="footer-links">
          <a href="#services">事業内容</a><a href="#works">制作実績</a><a href="#faq">よくあるご質問</a><a href="#contact">お問い合わせ</a><Link href="/privacy">プライバシーポリシー</Link>
        </div>
        <span>© 2026 MiraWeb</span>
      </footer>
    </main>
  );
}

function SectionHeading({ title, text, link, linkText }: { title: string; text: string; link?: string; linkText?: string }) {
  return <div className="heading"><div className="heading-left"><span className="bar" /><div><h2>{title}</h2><p>{text}</p></div></div>{link && <a href={link}>{linkText}</a>}</div>;
}

function Reason({ number, title, children }: { number: string; title: string; children: ReactNode }) {
  return <div className="reason-card"><b>{number}</b><h3>{title}</h3><p>{children}</p></div>;
}

function Flow({ number, icon, title, children }: { number: string; icon: string; title: string; children: ReactNode }) {
  return <div className="flow-item"><div className="flow-icon" aria-hidden="true">{icon}</div><div><b>{number}</b><h3>{title}</h3><p>{children}</p></div></div>;
}
