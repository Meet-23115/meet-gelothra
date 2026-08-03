import { Particles } from "@/components/ui/particles";
import { VideoText } from "@/components/ui/video-text";
import React, { useEffect, useState } from "react";
import { LiquidGlassCard } from "../uilayouts/liquid-glass";
import { DiaTextReveal } from "@/components/ui/dia-text-reveal";
import { LightRays } from "@/components/ui/light-rays";

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
          <div className="relative h-dvh  w-dvw overflow-hidden">
            <LightRays color="blue" />
            <Particles color="white" />
          </div>
        </div>
        <section className="Content">
          <div className="video-text w-[400px]">
            <DiaTextReveal
              className="text-[60px] w-full font-bold tracking-tight"
              text={`${greeting} I AM
                MEET
                GELOTHRA`}
              colors={["#A97CF8", "#F38CB8", "#FDCC92"]}
            />
            {/* <VideoText
                className=" w-full "
                fontSize={15}
                src="https://cdn.magicui.design/ocean-small.webm"
              >
                {`${greeting}
I AM
MEET
GELOTHRA`}
              </VideoText> */}
          </div>
          <LiquidGlassCard
            glowIntensity="xl"
            shadowIntensity="xl"
            borderRadius="50px"
            blurIntensity="sm"
            draggable
            className=""
          >
            <div className="image-wrapper">
              <div className="My-Image">
                <img src="./me.png" alt="" />
              </div>
            </div>
          </LiquidGlassCard>
        </section>
        {/* <img src="./hero-bg.jpg" alt="" /> */}
      </main>
    </div>
  );
};

export default Hero;
