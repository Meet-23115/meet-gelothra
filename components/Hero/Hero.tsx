import { Particles } from "@/components/ui/particles";
import { VideoText } from "@/components/ui/video-text";
import React, { useEffect, useState } from "react";
import { LiquidGlassCard } from "../uilayouts/liquid-glass";
import { DiaTextReveal } from "@/components/ui/dia-text-reveal";
import { LightRays } from "@/components/ui/light-rays";
import { TerminalDiv } from "./Terminal";

const Hero = () => {
  const [greeting, setGreeting] = useState("HELLO");

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
      setGreeting("GOOD\nMORNING,");
    } else if (hour >= 12 && hour < 17) {
      setGreeting("GOOD\nAFTERNOON,");
    } else if (hour >= 17 && hour < 21) {
      setGreeting("GOOD\nEVENING,");
    } else {
      setGreeting("GOOD\nNIGHT,");
    }
  }, []);
  return (
    <div className="Hero ">
      <main>
        <div className="background-particles">
          <div className="relative h-full w-full overflow-hidden">
            <Particles className="h-full w-full" color="white" />
          </div>
        </div>
        <section className="Content">
            <TerminalDiv />
          {/* <div className="video-text">
            <DiaTextReveal
              className="hero-text"
              text={`${greeting} I AM MEET GELOTHRA`}
              colors={["#A97CF8", "#F38CB8", "#FDCC92"]}
            />
          </div> */}
        </section>
      </main>
    </div>
  );
};

export default Hero;
