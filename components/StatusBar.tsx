"use client";

export default function StatusBar({ email }: { email: string }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-white/[0.04] backdrop-blur-2xl backdrop-saturate-150">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-2 px-6 py-3 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-string">
            <span className="h-1.5 w-1.5 rounded-full bg-string shadow-[0_0_6px_rgba(48,209,88,0.8)]" />{" "}
            main
          </span>
          <span>UTF-8</span>
          <span>© {year}</span>
        </div>
        <a href={`mailto:${email}`} className="hover:text-ink">
          {email}
        </a>
      </div>
    </footer>
  );
}
