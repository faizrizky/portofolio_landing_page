"use client";

import { motion } from "framer-motion";

export default function Navbar({ name }: { name: string }) {
  const links = [
    { href: "#projects", label: "projects" },
    { href: "#about", label: "about" },
    { href: "#contact", label: "contact" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-40 border-b border-white/10 bg-white/[0.05] backdrop-blur-2xl backdrop-saturate-150"
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3.5">
        <a
          href="#top"
          className="flex items-center gap-2 font-mono text-sm text-muted"
        >
          <span className="h-2 w-2 rounded-full bg-func shadow-[0_0_8px_rgba(10,132,255,0.8)]" />
          <span className="text-ink">
            {name.toLowerCase().replace(/\s+/g, "-")}
          </span>
        </a>
        <ul className="flex items-center gap-1 font-mono text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block rounded-full px-3 py-1.5 text-muted transition-colors hover:bg-white/10 hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
