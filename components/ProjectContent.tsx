import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import LightboxImage from "./LightboxImage";

// Renders project.description as Markdown. This is what lets an admin
// insert images anywhere inside the write-up — just drop
// ![keterangan](https://...) on its own line in the description
// field, as many times as needed, and it'll render inline as a
// glass-framed figure right where it appears in the text.
export default function ProjectContent({ content }: { content: string }) {
  return (
    <div className="mt-10 text-base leading-relaxed text-ink/80">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => (
            <h2 className="mb-3 mt-10 font-display text-xl font-semibold text-ink first:mt-0">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="mb-2 mt-8 font-display text-lg font-semibold text-ink">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="mb-5 leading-relaxed text-ink/80">{children}</p>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-func underline decoration-func/40 underline-offset-4 hover:decoration-func"
            >
              {children}
            </a>
          ),
          ul: ({ children }) => (
            <ul className="mb-5 list-disc space-y-1 pl-5">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="mb-5 list-decimal space-y-1 pl-5">{children}</ol>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-ink">{children}</strong>
          ),
          blockquote: ({ children }) => (
            <blockquote className="glass mb-5 rounded-2xl border-l-2 border-l-func px-5 py-4 text-ink/70">
              {children}
            </blockquote>
          ),
          img: ({ src, alt }) => (
            <LightboxImage src={src as string} alt={alt} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
