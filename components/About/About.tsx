import { DiaTextReveal } from "@/components/ui/dia-text-reveal";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { WavyBackground } from "@/components/ui/wavy-background";
import React from "react";

const About = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Meet-Gelothra.pdf";
    link.download = "Meet-Gelothra.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="About">
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          <DiaTextReveal
            className="text-4xl text-white font-bold tracking-tight"
            text="I Am A Software Engineer."
            colors={["#A97CF8", "#F38CB8", "#FDCC92"]}
          />
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          I build digital experiences where design meets engineering. From
          crafting performant web applications to exploring artificial
          intelligence and scalable systems, I enjoy creating software that's
          elegant, reliable, and built with attention to detail. Every project
          is an opportunity to learn something new, solve meaningful problems,
          and create products that leave a lasting impression.
        </p>
        <div className="flex justify-center  mt-2">
          <HoverBorderGradient
            as="button"
            onClick={downloadResume}
            containerClassName="rounded-full cursor-pointer "
            className="dark:bg-black bg-white cursor-pointer text-black dark:text-white"
          >
            Download Resume
          </HoverBorderGradient>
        </div>
      </WavyBackground>
    </div>
  );
};

export default About;
