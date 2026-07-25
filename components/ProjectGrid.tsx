import ProjectCard from "./ProjectCard";

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

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  if (projects.length === 0) {
    return (
      <div className="glass rounded-2xl border-dashed p-10 text-center font-mono text-sm text-muted">
        Belum ada project yang dipublikasikan. Tambahkan lewat admin panel.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  );
}
