"use client";

import { useEffect, useRef } from "react";

// Renders once in app/layout.tsx. Tracks the mouse across the whole
// site and moves the radial-gradient spotlight defined in globals.css
// (#cursor-spotlight) to follow it. See globals.css for the variables
// that control the glow's size and thickness.
export default function CursorSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      const el = ref.current;
      if (!el) return;
      el.style.setProperty("--spot-x", `${e.clientX}px`);
      el.style.setProperty("--spot-y", `${e.clientY}px`);
      el.classList.add("is-active");
    }

    function handleLeave() {
      ref.current?.classList.remove("is-active");
    }

    window.addEventListener("mousemove", handleMove);
    document.documentElement.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return <div ref={ref} id="cursor-spotlight" aria-hidden="true" />;
}
