"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

type Project = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  techStack: string;
  category: string;
  coverImage: string | null;
  featured: boolean;
};

const categoryColor: Record<string, string> = {
  web: "text-func border-func/30 bg-func/10",
  mobile: "text-keyword border-keyword/30 bg-keyword/10",
  api: "text-string border-string/30 bg-string/10",
  tool: "text-warn border-warn/30 bg-warn/10",
};

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const tags = project.techStack
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);
  const colorClass = categoryColor[project.category] ?? categoryColor.web;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.06 }}
    >
      <Link
        href={`/projects/${project.slug}`}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          e.currentTarget.style.setProperty(
            "--x",
            `${e.clientX - rect.left}px`,
          );
          e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
        }}
        className="glass glass-hover glow group flex h-full flex-col overflow-hidden rounded-2xl"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-white/5">
          {project.coverImage ? (
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              priority={index === 0}
              className="object-cover object-top opacity-90 transition-all duration-500 ease-out group-hover:scale-105 group-hover:opacity-100"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          ) : (
            <div className="flex h-full items-center justify-center font-mono text-xs text-muted">
              no preview
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center justify-between">
            <span
              className={`rounded-full border px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wide ${colorClass}`}
            >
              {project.category}
            </span>
            {project.featured && (
              <span className="font-mono text-[11px] text-warn">
                ★ featured
              </span>
            )}
          </div>

          <h3 className="mt-4 flex items-center gap-1.5 font-display text-xl font-semibold text-ink">
            {project.title}
            <span className="translate-x-0 text-func opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
              →
            </span>
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
            {project.summary}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-[11px] text-ink/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
