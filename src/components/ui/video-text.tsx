"use client";

import React, {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

export interface VideoTextProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  preload?: "auto" | "metadata" | "none";
  children: ReactNode;
  fontSize?: string | number;
  fontWeight?: string | number;
  textAnchor?: string;
  dominantBaseline?: string;
  fontFamily?: string;
  as?: ElementType;
}

export function VideoText({
  src,
  children,
  className = "",
  autoPlay = true,
  muted = true,
  loop = true,
  preload = "auto",
  fontSize = 20,
  fontWeight = "bold",
  textAnchor = "middle",
  dominantBaseline = "middle",
  fontFamily = "sans-serif",
  as: Component = "div",
}: VideoTextProps) {
  const [svgMask, setSvgMask] = useState("");

  const videoRef = useRef<HTMLVideoElement>(null);
  const hasSkipped = useRef(false);

  const content = React.Children.toArray(children).join("");

  // Generate SVG mask
  useEffect(() => {
    const updateSvgMask = () => {
      const responsiveFontSize =
        typeof fontSize === "number"
          ? `${fontSize}vw`
          : fontSize;

      const lines = content.split("\n");

      // Center multiple lines vertically
      const startDy = `${-(lines.length - 1) * 0.55}em`;

      const tspans = lines
        .map(
          (line, index) => `
            <tspan
              x="50%"
              dy="${index === 0 ? startDy : "1.1em"}"
            >
              ${line}
            </tspan>
          `
        )
        .join("");

      const newSvgMask = `
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <text
            x="50%"
            y="50%"
            text-anchor="${textAnchor}"
            dominant-baseline="${dominantBaseline}"
            font-size="${responsiveFontSize}"
            font-weight="${fontWeight}"
            font-family="${fontFamily}"
            fill="white"
          >
            ${tspans}
          </text>
        </svg>
      `;

      setSvgMask(newSvgMask);
    };

    updateSvgMask();

    window.addEventListener("resize", updateSvgMask);

    return () => {
      window.removeEventListener("resize", updateSvgMask);
    };
  }, [
    content,
    fontSize,
    fontWeight,
    textAnchor,
    dominantBaseline,
    fontFamily,
  ]);

  // Skip first 15 seconds only on the initial playback
  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const skipIntro = () => {
      if (hasSkipped.current) return;

      video.currentTime = Math.min(
        15,
        Math.max(video.duration - 0.1, 0)
      );

      hasSkipped.current = true;
    };

    video.addEventListener("canplay", skipIntro, { once: true });

    return () => {
      video.removeEventListener("canplay", skipIntro);
    };
  }, []);

  const dataUrlMask = `url("data:image/svg+xml,${encodeURIComponent(
    svgMask
  )}")`;

  return (
    <Component className={cn("relative size-full", className)}>
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          maskImage: dataUrlMask,
          WebkitMaskImage: dataUrlMask,
          maskSize: "contain",
          WebkitMaskSize: "contain",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
        }}
      >
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          preload={preload}
          playsInline
        >
          <source src={src} />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Accessibility */}
      <span className="sr-only whitespace-pre-line">
        {content}
      </span>
    </Component>
  );
}