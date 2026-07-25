"use client";

import { motion } from "framer-motion";

type HeroProps = {
  name: string;
  role: string;
  tagline: string;
  location?: string | null;
};

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const line = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function Hero({ name, role, tagline, location }: HeroProps) {
  return (
    <section id="top" className="relative">
      <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-32">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="glass max-w-2xl overflow-hidden rounded-3xl"
        >
          <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
            <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
            <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
            <span className="ml-3 font-mono text-xs text-muted">whoami.sh</span>
          </div>
          <div className="px-6 py-8 font-mono text-sm sm:text-base">
            <motion.p variants={line} className="text-muted">
              <span className="text-string">$</span> whoami
            </motion.p>
            <motion.h1
              variants={line}
              className="mt-2 font-display text-3xl font-bold text-ink sm:text-5xl"
            >
              {name}
            </motion.h1>
            <motion.p variants={line} className="mt-1 text-keyword">
              {role}
            </motion.p>
            <motion.p
              variants={line}
              className="mt-6 max-w-xl text-base leading-relaxed text-ink/80"
            >
              {tagline}
            </motion.p>
            {location && (
              <motion.p variants={line} className="mt-4 text-xs text-muted">
                <span className="text-func">location</span>: {location}
              </motion.p>
            )}
            <motion.div variants={line} className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-func px-5 py-2.5 font-mono text-sm font-medium text-white shadow-[0_4px_20px_rgba(10,132,255,0.45)] transition-transform hover:-translate-y-0.5"
              >
                lihat project →
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/15 bg-white/5 px-5 py-2 font-mono text-sm text-ink backdrop-blur-xl transition-colors hover:border-white/25 hover:bg-white/10"
              >
                hubungi saya
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
