"use client";
import { DiaTextReveal } from "@/components/ui/dia-text-reveal";
import { WavyBackground } from "@/components/ui/wavy-background";
import React from "react";
import { LiquidGlassCard } from "../uilayouts/liquid-glass";

const About = () => {
  return (
    <div className="About" id="about">
      <WavyBackground className="max-w-4xl flex flex-col gap-[10px] mx-auto ">
        <p className=" text-white headline-text font-bold inter-var text-center">
          <DiaTextReveal
            className="  text-white font-bold tracking-tight"
            text="I Am A Software Engineer."
            colors={["#A97CF8", "#F38CB8", "#FDCC92"]}
          />
        </p>
        <p className="text-base sub-text  text-white font-normal inter-var text-center">
          I build digital experiences where design meets engineering. From
          crafting performant web applications to exploring artificial
          intelligence and scalable systems, I enjoy creating software that's
          elegant, reliable, and built with attention to detail. Every project
          is an opportunity to learn something new, solve meaningful problems,
          and create products that leave a lasting impression.
        </p>
        <div className="Resume-btn-container">
          <a
            href="/Meet-Gelothra.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full p-4"
          >
            <div className="cursor-pointer">
              <LiquidGlassCard
                glowIntensity="xl"
                shadowIntensity="xl"
                borderRadius="50px"
                blurIntensity="sm"
                draggable={false}
                className="resume-liquid-glass"
              >
                <div>Resume</div>
              </LiquidGlassCard>
            </div>
          </a>
        </div>
        {/* Download button removed from About per request; moved to Nav */}
      </WavyBackground>
    </div>
  );
};

export default About;
