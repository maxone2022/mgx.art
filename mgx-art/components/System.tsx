"use client";

import { motion } from "framer-motion";
import { useI18n } from "./Providers";

const items = [
  {
    key: "modularity",
    zh: "模块拼接 / 快速挂载 / 自由扩展",
    en: "Snap-on modules / quick mounting / free expansion",
  },
  {
    key: "resilience",
    zh: "军规标准 / 高耐久材料 / 极端环境可靠",
    en: "Mil-spec mindset / durable materials / reliable in extremes",
  },
  {
    key: "adaptability",
    zh: "多场景转换 / 版本迭代 / 生命周期升级",
    en: "Multi-scenario switch / iterative versions / lifecycle upgrades",
  },
] as const;

export function System() {
  const { lang, t } = useI18n();

  return (
    <section className="mx-auto max-w-7xl px-6 py-20" id="system">
      <div className="md:flex items-end justify-between">
        <h2 className="text-2xl font-semibold md:text-3xl">{t("systemTitle")}</h2>
        <p className="mt-3 max-w-2xl text-white/70 md:mt-0">{t("systemBody")}</p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {items.map((item, index) => (
          <motion.div
            key={item.key}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            initial={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="mb-4 h-10 w-10 rounded-xl bg-brand" />
            <h3 className="text-lg font-medium">{t(item.key)}</h3>
            <p className="mt-2 text-sm text-white/70">{lang === "zh" ? item.zh : item.en}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
