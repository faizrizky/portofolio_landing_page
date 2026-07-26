"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";

type LightboxState = { src: string; alt?: string } | null;

type LightboxContextValue = {
  open: (src: string, alt?: string) => void;
};

const LightboxContext = createContext<LightboxContextValue | null>(null);

// Any component under <LightboxProvider> (mounted once in app/layout.tsx)
// can call this to pop the image up in a modal — used by both the inline
// markdown images (ProjectContent) and the screenshots gallery.
export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) {
    throw new Error("useLightbox must be used within <LightboxProvider>");
  }
  return ctx;
}

export default function LightboxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = useState<LightboxState>(null);

  const open = useCallback((src: string, alt?: string) => {
    setState({ src, alt });
  }, []);

  const close = useCallback(() => setState(null), []);

  // Lock body scroll + close on Escape while the modal is open.
  useEffect(() => {
    if (!state) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [state, close]);

  return (
    <LightboxContext.Provider value={{ open }}>
      {children}

      <AnimatePresence>
        {state && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md sm:p-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong relative max-h-[85vh] max-w-5xl overflow-hidden rounded-2xl"
            >
              <button
                onClick={close}
                aria-label="Tutup"
                className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-xl transition-colors hover:border-white/30 hover:bg-black/60"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                >
                  <path d="M2 2l12 12M14 2L2 14" />
                </svg>
              </button>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={state.src}
                alt={state.alt ?? ""}
                className="max-h-[85vh] w-auto max-w-full object-contain"
              />

              {state.alt && (
                <p className="border-t border-white/10 bg-black/30 px-4 py-2.5 text-center font-mono text-xs text-bg">
                  {state.alt}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </LightboxContext.Provider>
  );
}
