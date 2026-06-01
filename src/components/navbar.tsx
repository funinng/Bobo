"use client";

import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "#features", label: "功能" },
  { href: "#pricing", label: "定价" },
  { href: "#testimonials", label: "客户" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-6xl">
      <nav
        className="flex items-center justify-between rounded-2xl border border-card-border px-4 py-3 shadow-lg backdrop-blur-xl"
        style={{ background: "var(--nav-bg)" }}
      >
        <a
          href="#"
          className="font-heading flex cursor-pointer items-center gap-2 text-lg font-bold tracking-tight"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-background">
            <Zap className="h-5 w-5" aria-hidden />
          </span>
          NexusFlow
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="cursor-pointer text-sm text-muted transition-colors duration-200 hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href="#pricing"
            className="cursor-pointer rounded-lg bg-accent px-4 py-2 text-sm font-medium text-background transition-colors duration-200 hover:bg-accent-hover"
          >
            免费试用
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-card-border"
            aria-label={open ? "关闭菜单" : "打开菜单"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mt-2 rounded-2xl border border-card-border p-4 shadow-lg backdrop-blur-xl md:hidden" style={{ background: "var(--nav-bg)" }}>
          <ul className="flex flex-col gap-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block cursor-pointer py-2 text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#pricing"
                onClick={() => setOpen(false)}
                className="mt-2 block cursor-pointer rounded-lg bg-accent py-3 text-center font-medium text-background"
              >
                免费试用
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
