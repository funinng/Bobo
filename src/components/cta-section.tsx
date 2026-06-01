import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="px-4 py-24">
      <div className="glass-card relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-accent/30 p-12 text-center">
        <div className="glow-orb absolute inset-0 opacity-40" />
        <div className="relative">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            准备好加速你的 SaaS 增长了吗？
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted">
            加入 10,000+ 团队，14 天内体验完整 Pro 功能。
          </p>
          <a
            href="#pricing"
            className="font-heading mt-8 inline-flex cursor-pointer items-center gap-2 rounded-xl bg-accent px-8 py-4 font-semibold text-background transition-all duration-200 hover:bg-accent-hover hover:shadow-[0_0_32px_var(--glow)]"
          >
            立即免费试用
            <ArrowRight className="h-5 w-5" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
