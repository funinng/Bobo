import { Code2, Building2, Share2, Zap } from "lucide-react";

const footerLinks = {
  产品: ["功能", "定价", "集成", "更新日志"],
  公司: ["关于我们", "博客", "招聘", "联系"],
  资源: ["文档", "API", "社区", "状态页"],
  法律: ["隐私政策", "服务条款", "安全"],
};

export function Footer() {
  return (
    <footer className="border-t border-card-border px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <a
              href="#"
              className="font-heading flex cursor-pointer items-center gap-2 text-lg font-bold"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-background">
                <Zap className="h-5 w-5" aria-hidden />
              </span>
              NexusFlow
            </a>
            <p className="mt-4 max-w-xs text-sm text-muted leading-relaxed">
              智能协作平台，助力 SaaS 团队以数据驱动决策、以自动化释放创造力。
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Share2, label: "社交动态" },
                { icon: Code2, label: "开源仓库" },
                { icon: Building2, label: "企业主页" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-card-border transition-colors duration-200 hover:border-accent hover:text-accent"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading mb-4 text-sm font-semibold uppercase tracking-wider">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="cursor-pointer text-sm text-muted transition-colors duration-200 hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-12 border-t border-card-border pt-8 text-center text-sm text-muted">
          © {new Date().getFullYear()} NexusFlow. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
