import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/api";
import Navbar from "@/components/Navbar";
import StatusBar from "@/components/StatusBar";
import ProjectContent from "@/components/ProjectContent";
import { getProfile } from "@/lib/api";

export const revalidate = 60;

const categoryColor: Record<string, string> = {
  web: "text-func border-func/30 bg-func/10",
  mobile: "text-keyword border-keyword/30 bg-keyword/10",
  api: "text-string border-string/30 bg-string/10",
  tool: "text-warn border-warn/30 bg-warn/10",
};

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [project, profile] = await Promise.all([
    getProjectBySlug(slug),
    getProfile(),
  ]);

  if (!project) notFound();

  const tags = project.techStack
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);
  const screenshots = project.screenshots
    .split(/\r?\n/)
    .map((s) => s.trim())
    .filter(Boolean);
  const colorClass = categoryColor[project.category] ?? categoryColor.web;

  return (
    <>
      <Navbar name={profile?.name ?? "portfolio"} />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <Link
          href="/#projects"
          className="font-mono text-sm text-muted hover:text-func"
        >
          ← kembali ke semua project
        </Link>

        <div className="mt-6 flex items-center gap-3">
          <span
            className={`rounded-full border px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wide ${colorClass}`}
          >
            {project.category}
          </span>
          {project.featured && (
            <span className="font-mono text-[11px] text-warn">★ featured</span>
          )}
        </div>

        <h1 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">
          {project.title}
        </h1>
        {project.role && (
          <p className="mt-2 font-mono text-sm text-keyword">{project.role}</p>
        )}

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

        <div className="mt-6 flex flex-wrap gap-4 font-mono text-sm">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-func px-4 py-2 font-medium text-white shadow-[0_4px_20px_rgba(10,132,255,0.45)] transition-transform hover:-translate-y-0.5"
            >
              live demo →
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-ink backdrop-blur-xl transition-colors hover:border-white/25 hover:bg-white/10"
            >
              source code
            </a>
          )}
        </div>

        <ProjectContent content={project.description} />

        {screenshots.length > 0 && (
          <div className="mt-12 space-y-6">
            <p className="font-mono text-xs text-muted">// screenshots</p>
            {screenshots.map((src, i) => (
              <div
                key={src}
                className="glass mx-auto max-w-lg overflow-hidden rounded-2xl"
              >
                <Image
                  src={src}
                  alt={`${project.title} screenshot ${i + 1}`}
                  width={800}
                  height={500}
                  className="w-full"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>
            ))}
          </div>
        )}
      </main>
      <StatusBar email={profile?.email ?? ""} />
    </>
  );
}
