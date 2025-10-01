"use client";

import { useI18n } from "./Providers";

export function Field() {
  const { t } = useI18n();

  return (
    <section className="mx-auto max-w-7xl px-6 py-20" id="field">
      <h2 className="text-2xl font-semibold md:text-3xl">{t("fieldTitle")}</h2>
      <p className="mt-3 text-white/70">{t("fieldBody")}</p>
      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="grid aspect-[4/5] place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-xs text-white/30"
          >
            Media {index + 1}
          </div>
        ))}
      </div>
    </section>
  );
}
