import { useId, type ReactElement } from "react";

type BacklightProps = {
  children: ReactElement;
  className?: string;
  blur?: number;
  radius?: number | string;
};

export function Backlight({
  blur = 24,
  radius = "inherit",
  children,
  className,
}: BacklightProps) {
  const id = useId();

  return (
    <div
      className={`relative inline-block ${className ?? ""}`}
      style={{
        borderRadius: radius,
        overflow: "visible",
      }}
    >
      <svg width="0" height="0" aria-hidden="true">
        <filter
          id={id}
          x="-100%"
          y="-100%"
          width="300%"
          height="300%"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation={blur}
            result="blur"
          />

          <feColorMatrix
            in="blur"
            type="saturate"
            values="4"
            result="color"
          />

          <feMerge>
            <feMergeNode in="color" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </svg>

      <div
        className="relative"
        style={{
          filter: `url(#${id})`,
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
}