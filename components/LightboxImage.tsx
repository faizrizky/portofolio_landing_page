"use client";

import { useLightbox } from "./LightboxProvider";

export default function LightboxImage({
  src,
  alt,
}: {
  src?: string;
  alt?: string;
}) {
  const { open } = useLightbox();

  if (!src) return null;

  return (
    <figure className="glass my-8 overflow-hidden rounded-2xl">
      <button
        type="button"
        onClick={() => open(src, alt)}
        aria-label={alt ? `Perbesar gambar: ${alt}` : "Perbesar gambar"}
        className="group block w-full cursor-zoom-in"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt ?? ""}
          loading="lazy"
          className="w-full transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </button>
      {alt && (
        <figcaption className="border-t border-white/10 px-4 py-2 text-center font-mono text-xs text-muted">
          {alt}
        </figcaption>
      )}
    </figure>
  );
}
