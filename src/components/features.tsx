import {
  Bot,
  Workflow,
  LineChart,
  Lock,
  Plug,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI 智能助手",
    desc: "自然语言驱动任务创建、摘要与决策建议，减少 60% 重复沟通。",
    span: "md:col-span-2 md:row-span-2",
    highlight: true,
  },
  {
    icon: Workflow,
    title: "可视化工作流",
    desc: "拖拽编排跨部门流程，触发器与条件分支一目了然。",
    span: "",
  },
  {
    icon: LineChart,
    title: "实时分析",
    desc: "自定义仪表盘，追踪 KPI 与团队负载。",
    span: "",
  },
  {
    icon: Lock,
    title: "零信任安全",
    desc: "SSO、RBAC、审计日志，满足合规审计要求。",
    span: "",
  },
  {
    icon: Plug,
    title: "200+ 集成",
    desc: "Slack、GitHub、Notion、Salesforce 等一键连接。",
    span: "md:col-span-2",
  },
  {
    icon: Users,
    title: "协作空间",
    desc: "项目、文档、评论集中管理，告别工具碎片化。",
    span: "",
  },
];

export function Features() {
  return (
    <section id="features" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
            核心能力
          </p>
          <h2 className="font-heading text-3xl font-bold md:text-5xl">
            为高速增长的 SaaS 团队打造
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Bento 式功能布局，一眼看清平台价值——从自动化到洞察，全栈覆盖。
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:auto-rows-[minmax(140px,auto)]">
          {features.map((f) => (
            <article
              key={f.title}
              className={`glass-card group cursor-pointer rounded-2xl p-6 transition-all duration-200 hover:border-accent/50 hover:shadow-[0_0_24px_var(--glow)] ${f.span} ${f.highlight ? "md:min-h-[320px]" : ""}`}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-background">
                <f.icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="font-heading mb-2 text-xl font-semibold">
                {f.title}
              </h3>
              <p className="text-muted leading-relaxed">{f.desc}</p>
              {f.highlight && (
                <div className="mt-6 rounded-lg border border-card-border bg-background/50 p-4 font-mono text-xs text-muted">
                  <span className="text-accent">$</span> nexus ai summarize
                  --project Q2-launch
                  <br />
                  <span className="text-foreground">
                    → 已生成 3 条行动项，2 个风险提醒
                  </span>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
