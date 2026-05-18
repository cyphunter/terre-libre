type OrnamentProps = {
  className?: string;
  variant?: "double-line" | "diamond" | "wave";
};

/**
 * Ornements décoratifs SVG inline — petits motifs typographiques
 * pour séparer/illustrer les sections.
 */
export function Ornament({ className, variant = "double-line" }: OrnamentProps) {
  if (variant === "double-line") {
    return (
      <svg
        className={className}
        width="80"
        height="14"
        viewBox="0 0 80 14"
        fill="none"
        aria-hidden
      >
        <line x1="0" y1="4" x2="34" y2="4" stroke="currentColor" strokeWidth="0.8" />
        <line x1="46" y1="4" x2="80" y2="4" stroke="currentColor" strokeWidth="0.8" />
        <line x1="0" y1="10" x2="34" y2="10" stroke="currentColor" strokeWidth="0.8" />
        <line x1="46" y1="10" x2="80" y2="10" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="40" cy="7" r="2.4" fill="currentColor" />
      </svg>
    );
  }

  if (variant === "diamond") {
    return (
      <svg
        className={className}
        width="80"
        height="10"
        viewBox="0 0 80 10"
        fill="none"
        aria-hidden
      >
        <line x1="0" y1="5" x2="32" y2="5" stroke="currentColor" strokeWidth="0.8" />
        <path d="M40 1 L44 5 L40 9 L36 5 Z" fill="currentColor" />
        <line x1="48" y1="5" x2="80" y2="5" stroke="currentColor" strokeWidth="0.8" />
      </svg>
    );
  }

  // wave
  return (
    <svg
      className={className}
      width="80"
      height="14"
      viewBox="0 0 80 14"
      fill="none"
      aria-hidden
    >
      <path
        d="M0 7 Q 10 1, 20 7 T 40 7 T 60 7 T 80 7"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="none"
      />
    </svg>
  );
}
