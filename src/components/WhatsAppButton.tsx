import { WHATSAPP_URL } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

type Props = {
  size?: "sm" | "md" | "lg";
  className?: string;
  label?: string;
  fullWidth?: boolean;
};

export function WhatsAppButton({
  size = "md",
  className = "",
  label = "Scrivici su WhatsApp",
  fullWidth = false,
}: Props) {
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-3 text-[15px]",
    lg: "px-7 py-4 text-base sm:text-lg",
  } as const;

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand-green)] font-semibold text-white shadow-sm shadow-[var(--brand-green)]/30 transition-all hover:brightness-110 hover:shadow-md hover:shadow-[var(--brand-green)]/40 active:scale-[0.98] ${sizes[size]} ${fullWidth ? "w-full" : ""} ${className}`}
    >
      <WhatsAppIcon className="h-5 w-5" />
      {label}
    </a>
  );
}
