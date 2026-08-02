import { Particles } from "@/components/ui/particles";
import { VideoText } from "@/components/ui/video-text";
import React, { useEffect, useState } from "react";
import { LiquidGlassCard } from "../uilayouts/liquid-glass";

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
            <Particles color="white" />
          </div>
        </div>
        <section className="Content">
          <div className="video-text">
            <div className="relative h-[600px] w-[600px] overflow-hidden">
              <VideoText
                className=" w-full "
                fontSize={15}
                src="https://cdn.magicui.design/ocean-small.webm"
              >
                {`${greeting}
I AM
MEET
GELOTHRA`}
              </VideoText>
            </div>
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
