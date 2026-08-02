import { Particles } from "@/components/ui/particles";
import { VideoText } from "@/components/ui/video-text";
import React from "react";
import { LiquidGlassCard } from "../uilayouts/liquid-glass";

const Hero = () => {
  return (
    <div className="Hero">
      <main>
        <div className="background-particles">
          <div className="relative h-full w-full overflow-hidden">
            <Particles color="white" />
          </div>
        </div>
        <section className="Content">
          <div className="video-text">
            <div className="relative h-[400px] w-[600px] overflow-hidden">
              <VideoText
                className=" w-full "
                fontSize={15}
                src="./sabrina-carpenter-kissing-screen-live-wallpaper.mp4"
              >
                {`MEET
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
