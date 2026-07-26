const API_URL = process.env.NEXT_PUBLIC_API_URL;

export type Profile = {
  name: string;
  role: string;
  tagline: string;
  about: string;
  email: string;
  location: string | null;
  whatsapp: string | null;
  githubUrl: string | null;
  linkedinUrl: string | null;
  cvUrl: string | null;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  role: string | null;
  techStack: string;
  category: string;
  coverImage: string | null;
  screenshots: string;
  liveUrl?: string | null;
  repoUrl?: string | null;
  featured: boolean;
};

// revalidate: 60 -> data di-refresh maksimal tiap 60 detik (ISR), jadi kamu
// gak perlu redeploy landing page tiap kali ubah konten lewat admin panel.
export async function getProfile(): Promise<Profile | null> {
  if (!API_URL) return null;
  try {
    const res = await fetch(`${API_URL}/api/profile`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function getProjects(): Promise<Project[]> {
  if (!API_URL) return [];
  try {
    const res = await fetch(`${API_URL}/api/projects`, { next: { revalidate: 60 } });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  if (!API_URL) return null;
  try {
    const res = await fetch(`${API_URL}/api/projects?slug=${encodeURIComponent(slug)}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    const results: Project[] = await res.json();
    return results[0] ?? null;
  } catch {
    return null;
  }
}
