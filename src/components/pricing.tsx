import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "¥0",
    period: "永久免费",
    desc: "适合小团队试水",
    features: ["最多 5 名成员", "基础工作流", "社区支持", "1GB 存储"],
    cta: "免费开始",
    popular: false,
  },
  {
    name: "Pro",
    price: "¥199",
    period: "/ 人 / 月",
    desc: "成长型 SaaS 团队首选",
    features: [
      "无限成员",
      "AI 助手无限次",
      "高级分析与导出",
      "优先邮件支持",
      "SSO 单点登录",
    ],
    cta: "开始试用",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "定制",
    period: "联系销售",
    desc: "大型组织与安全合规",
    features: [
      "专属客户成功",
      "私有部署选项",
      "定制 SLA",
      "审计与合规包",
      "API 速率无限制",
    ],
    cta: "联系销售",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
            定价
          </p>
          <h2 className="font-heading text-3xl font-bold md:text-5xl">
            透明定价，按需扩展
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            所有付费方案均含 14 天免费试用，无需信用卡。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`glass-card relative flex flex-col rounded-2xl p-8 transition-all duration-200 ${
                plan.popular
                  ? "border-accent shadow-[0_0_40px_var(--glow)] md:scale-105"
                  : "hover:border-accent/40"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-0.5 text-xs font-semibold text-background">
                  最受欢迎
                </span>
              )}
              <h3 className="font-heading text-xl font-semibold">{plan.name}</h3>
              <p className="mt-1 text-sm text-muted">{plan.desc}</p>
              <div className="mt-6">
                <span className="font-heading text-4xl font-bold">
                  {plan.price}
                </span>
                <span className="text-muted"> {plan.period}</span>
              </div>
              <ul className="mt-8 flex flex-1 flex-col gap-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                      aria-hidden
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`mt-8 block cursor-pointer rounded-xl py-3 text-center font-semibold transition-colors duration-200 ${
                  plan.popular
                    ? "bg-accent text-background hover:bg-accent-hover"
                    : "border border-card-border hover:border-accent hover:text-accent"
                }`}
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
