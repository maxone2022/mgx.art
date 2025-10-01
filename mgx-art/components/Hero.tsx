"use client";

import { motion } from "framer-motion";
import { useI18n } from "./Providers";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand/20 via-transparent to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-36">
        <motion.h1
          className="text-3xl font-semibold leading-tight md:text-5xl"
          initial="hidden"
          variants={fadeUp}
          viewport={{ once: true }}
          whileInView="show"
        >
          {t("slogan")}
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-white/80 md:text-2xl"
          initial="hidden"
          variants={fadeUp}
          viewport={{ once: true }}
          whileInView="show"
        >
          {t("mgxFull")}
        </motion.p>
        <motion.p
          className="mt-4 max-w-3xl text-base text-white/70 md:text-lg"
          initial="hidden"
          variants={fadeUp}
          viewport={{ once: true }}
          whileInView="show"
        >
          {t("heroSub")}
        </motion.p>
        <motion.div
          className="mt-8 flex gap-4"
          initial="hidden"
          variants={fadeUp}
          viewport={{ once: true }}
          whileInView="show"
        >
          <a
            className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-medium shadow-brand transition-shadow hover:shadow-[0_12px_28px_rgba(95,43,255,0.65)]"
            href="#system"
          >
            {t("explore")}
          </a>
        </motion.div>
        <div className="mt-16 grid aspect-[16/7] place-items-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02]">
          <div className="text-sm text-white/40">(Logo Assembly / Module Montage Animation Slot)</div>
        </div>
      </div>
    </section>
  );
}
