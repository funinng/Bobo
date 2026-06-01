import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "NexusFlow 让我们在三个月内将发布周期缩短一半，AI 工作流简直是游戏规则改变者。",
    author: "陈思远",
    role: "CTO · CloudScale",
  },
  {
    quote:
      "从 Slack 通知到 Jira 同步全自动，团队终于不用再当人肉路由器了。",
    author: "李雨桐",
    role: "产品负责人 · DataPulse",
  },
  {
    quote:
      "安全审计一次通过。RBAC 和日志能力是我们选择 Enterprise 的关键原因。",
    author: "王浩然",
    role: "信息安全总监 · FinEdge",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="font-heading text-3xl font-bold md:text-5xl">
            深受创新团队信赖
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.author}
              className="glass-card rounded-2xl p-6 transition-colors duration-200 hover:border-accent/30"
            >
              <Quote
                className="mb-4 h-8 w-8 text-accent/60"
                aria-hidden
              />
              <p className="leading-relaxed text-foreground">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-6 border-t border-card-border pt-4">
                <cite className="font-heading not-italic font-semibold">
                  {t.author}
                </cite>
                <p className="text-sm text-muted">{t.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
