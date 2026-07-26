import { getProfile, getProjects } from "@/lib/api";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import StatusBar from "@/components/StatusBar";
import { Mail, MessageCircle, Github, Linkedin, Download } from "lucide-react";

export default async function HomePage() {
  const [profile, projects] = await Promise.all([getProfile(), getProjects()]);

  if (!profile) {
    return (
      <main className="flex min-h-screen items-center justify-center px-6 text-center font-mono text-sm text-muted">
        Gagal memuat konten. Pastikan NEXT_PUBLIC_API_URL menunjuk ke
        admin-panel yang sedang jalan, dan profile sudah diisi lewat /admin di
        sana.
      </main>
    );
  }

  return (
    <>
      <Navbar name={profile.name} />
      <main>
        <Hero
          name={profile.name}
          role={profile.role}
          tagline={profile.tagline}
          location={profile.location}
        />

        <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
          <div className="mb-8 flex items-baseline gap-3">
            <span className="font-mono text-sm text-muted">02</span>
            <h2 className="font-display text-2xl font-semibold text-ink">
              Projects
            </h2>
          </div>
          <ProjectGrid projects={projects} />
        </section>

        <section
          id="about"
          className="border-t border-white/10 bg-white/[0.03] backdrop-blur-xl"
        >
          <div className="mx-auto max-w-5xl px-6 py-20">
            <div className="mb-6 flex items-baseline gap-3">
              <span className="font-mono text-sm text-muted">03</span>
              <h2 className="font-display text-2xl font-semibold text-ink">
                About
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-ink/80">
              {profile.about}
            </p>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
          <div className="mb-6 flex items-baseline gap-3">
            <span className="font-mono text-sm text-muted">04</span>
            <h2 className="font-display text-2xl font-semibold text-ink">
              Contact
            </h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 rounded-full bg-func px-5 py-2.5 font-mono text-sm font-medium text-white shadow-[0_4px_20px_rgba(10,132,255,0.45)] transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" />
              {profile.email}
            </a>
            {profile.whatsapp && (
              <a
                href={`https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(
                  `Halo ${profile.name}, saya tertarik diskusi soal project.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 font-mono text-sm font-medium text-white shadow-[0_4px_20px_rgba(37,211,102,0.45)] transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" />
                whatsapp
              </a>
            )}
            {profile.githubUrl && (
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 font-mono text-sm text-ink backdrop-blur-xl transition-colors hover:border-white/25 hover:bg-white/10"
              >
                <Github className="h-4 w-4" />
                github
              </a>
            )}
            {profile.linkedinUrl && (
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 font-mono text-sm text-ink backdrop-blur-xl transition-colors hover:border-white/25 hover:bg-white/10"
              >
                <Linkedin className="h-4 w-4" />
                linkedin
              </a>
            )}
            {profile.cvUrl && (
              <a
                href={profile.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 font-mono text-sm text-ink backdrop-blur-xl transition-colors hover:border-white/25 hover:bg-white/10"
              >
                <Download className="h-4 w-4" />
                download cv
              </a>
            )}
          </div>
        </section>
      </main>
      <StatusBar email={profile.email} />
    </>
  );
}
