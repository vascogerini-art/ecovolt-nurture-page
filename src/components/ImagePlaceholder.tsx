export function ImagePlaceholder({
  className = "",
  label = "[Da inserire]",
  aspect = "aspect-[4/3]",
}: {
  className?: string;
  label?: string;
  aspect?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center rounded-2xl ${aspect} ${className}`}
      style={{ backgroundColor: "#1a1a1a" }}
    >
      <span className="text-sm font-medium tracking-wide text-white/60">{label}</span>
    </div>
  );
}
