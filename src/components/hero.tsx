import {
  ArrowRight,
  Play,
  Sparkles,
  Shield,
  BarChart3,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative px-4 pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="mx-auto max-w-6xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-card-border bg-card px-4 py-1.5 text-sm text-muted">
          <Sparkles className="h-4 w-4 text-accent" aria-hidden />
          <span>新一代 AI 驱动企业协作平台</span>
        </div>

        <h1 className="font-heading mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
          用智能工作流
          <span className="text-gradient"> 重塑团队效率</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          NexusFlow 将自动化、数据分析与 AI 助手融为一体，帮助 SaaS
          团队以更少人力完成更多交付，安全合规、开箱即用。
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#pricing"
            className="font-heading flex cursor-pointer items-center gap-2 rounded-xl bg-accent px-8 py-4 text-base font-semibold text-background shadow-lg transition-all duration-200 hover:bg-accent-hover hover:shadow-[0_0_32px_var(--glow)]"
          >
            开始 14 天免费试用
            <ArrowRight className="h-5 w-5" aria-hidden />
          </a>
          <a
            href="#features"
            className="flex cursor-pointer items-center gap-2 rounded-xl border border-card-border bg-card px-8 py-4 text-base font-medium transition-colors duration-200 hover:border-accent hover:text-accent"
          >
            <Play className="h-5 w-5" aria-hidden />
            观看产品演示
          </a>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {[
            { icon: Shield, label: "SOC 2 合规", desc: "企业级安全" },
            { icon: BarChart3, label: "99.9% SLA", desc: "稳定可用" },
            { icon: Sparkles, label: "AI 原生", desc: "智能自动化" },
          ].map((item) => (
            <div
              key={item.label}
              className="glass-card flex flex-col items-center rounded-xl p-5 transition-colors duration-200 hover:border-accent/40"
            >
              <item.icon className="mb-2 h-6 w-6 text-accent" aria-hidden />
              <span className="font-heading font-semibold">{item.label}</span>
              <span className="text-sm text-muted">{item.desc}</span>
            </div>
          ))}
        </div>

        <div className="glass-card relative mx-auto mt-16 overflow-hidden rounded-2xl border border-card-border p-1">
          <div className="rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 dark:from-slate-800 dark:to-slate-900">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500" />
              <span className="h-3 w-3 rounded-full bg-yellow-500" />
              <span className="h-3 w-3 rounded-full bg-green-500" />
              <span className="ml-4 font-mono text-xs text-slate-400">
                dashboard.nexusflow.io
              </span>
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              {["工作流执行 +127%", "活跃项目 48", "AI 建议已采纳 312"].map(
                (stat) => (
                  <div
                    key={stat}
                    className="rounded-lg border border-slate-700/50 bg-slate-800/50 p-4 font-mono text-sm text-slate-300"
                  >
                    {stat}
                  </div>
                )
              )}
            </div>
            <div className="mt-3 h-24 rounded-lg border border-slate-700/50 bg-slate-800/30">
              <div className="flex h-full items-end gap-1 px-4 pb-3">
                {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-accent/80"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
