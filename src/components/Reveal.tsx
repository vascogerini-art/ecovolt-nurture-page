import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "li";
};

// Cache one media query check + a flag for coarse pointers (mobile/tablet).
const isClient = typeof window !== "undefined";
const prefersReducedMotion =
  isClient && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
const isCoarsePointer =
  isClient && window.matchMedia?.("(pointer: coarse)").matches;

export function Reveal({ children, className = "", delay = 0, as: Tag = "div" }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Lighter, snappier motion on mobile (coarse pointers); cap stagger delay.
  const duration = isCoarsePointer ? 450 : 600;
  const translate = isCoarsePointer ? "10px" : "16px";
  const cappedDelay = Math.min(delay, isCoarsePointer ? 150 : 320);

  return (
    <Tag
      ref={ref as never}
      style={{
        transitionDelay: prefersReducedMotion ? "0ms" : `${cappedDelay}ms`,
        transitionProperty: "opacity, transform",
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : `translate3d(0, ${translate}, 0)`,
        willChange: visible ? "auto" : "opacity, transform",
      }}
      className={className}
    >
      {children}
    </Tag>
  );
}
