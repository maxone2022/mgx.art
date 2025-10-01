"use client";

import { useI18n } from "./Providers";

export function What() {
  const { t } = useI18n();

  return (
    <section className="mx-auto max-w-7xl px-6 py-20" id="what">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold md:text-3xl">{t("whatTitle")}</h2>
          <p className="mt-4 leading-relaxed text-white/80">{t("whatBody")}</p>
        </div>
        <div className="grid aspect-video place-items-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02]">
          <span className="text-sm text-white/40">(3D / short loop: pack + MOLLE modules)</span>
        </div>
      </div>
    </section>
  );
}
