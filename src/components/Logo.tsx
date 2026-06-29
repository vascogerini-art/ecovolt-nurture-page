import logoSrc from "@/assets/logo-ecovoltaica.png";

export function Logo({ className = "", height = 32 }: { className?: string; height?: number }) {
  return (
    <img
      src={logoSrc}
      alt="ecovoltaica"
      style={{ height }}
      className={`w-auto select-none ${className}`}
      draggable={false}
    />
  );
}
