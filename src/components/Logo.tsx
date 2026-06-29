import { Leaf, Zap } from "lucide-react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative flex h-9 w-9 items-center justify-center rounded-xl brand-gradient text-white">
        <Leaf className="h-5 w-5" strokeWidth={2.4} />
        <Zap
          className="absolute h-3.5 w-3.5 text-white"
          strokeWidth={2.8}
          fill="white"
          style={{ top: 6, right: 5 }}
        />
      </div>
      <span className="font-display text-lg font-700 lowercase tracking-tight text-[var(--brand-teal)]">
        ecovoltaica
      </span>
    </div>
  );
}
