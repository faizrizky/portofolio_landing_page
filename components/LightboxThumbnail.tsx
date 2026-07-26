"use client";

import Image from "next/image";
import { useLightbox } from "./LightboxProvider";

export default function LightboxThumbnail({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const { open } = useLightbox();

  return (
    <button
      type="button"
      onClick={() => open(src, alt)}
      aria-label={`Perbesar ${alt}`}
      className="glass group block w-full cursor-zoom-in overflow-hidden rounded-2xl"
    >
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={750}
        className="w-full transition-transform duration-300 group-hover:scale-[1.02]"
        sizes="(max-width: 768px) 100vw, 768px"
      />
    </button>
  );
}
