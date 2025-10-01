"use client";

import { useI18n } from "./Providers";

const navItems = [
  { href: "#what", labelKey: "nav.mgx" },
  { href: "#system", labelKey: "nav.system" },
  { href: "#values", labelKey: "nav.values" },
  { href: "#field", labelKey: "nav.field" },
  { href: "#contact", labelKey: "nav.contact" },
];

export function TopNav() {
  const { lang, setLang, t } = useI18n();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/80 backdrop-blur supports-[backdrop-filter]:bg-ink/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-20 rounded bg-brand" />
          <span className="text-sm text-white/60">mgx.art</span>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          {navItems.map((item) => (
            <a className="hover:text-white" href={item.href} key={item.href}>
              {t(item.labelKey)}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            className="rounded-full border border-white/20 px-3 py-1.5 text-xs hover:border-white/40"
            onClick={() => setLang((current) => (current === "zh" ? "en" : "zh"))}
            type="button"
          >
            {lang === "zh" ? "EN" : "中文"}
          </button>
        </div>
      </div>
    </header>
  );
}
