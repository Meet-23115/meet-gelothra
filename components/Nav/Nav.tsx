import React from "react";
import { LiquidGlassCard } from "../uilayouts/liquid-glass";
import { ShimmerButton } from "@/components/ui/shimmer-button";

const Nav = () => {
  return (
    <div className="Nav">
      <div className="main-nav">
        <LiquidGlassCard
          glowIntensity="xl"
          shadowIntensity="xl"
          borderRadius="50px"
          blurIntensity="sm"
          draggable
          className="liquid-glass"
        >
          <div className="Content">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Projects</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Let's Talk</a>
              </li>
            </ul>
          </div>
        </LiquidGlassCard>
      </div>
      {/* <div className="btn">
        <ShimmerButton className="shadow-2xl  ">
          <LiquidGlassCard className="btn-glass">
            <div className=" h-4 w-5 ">
              Resume
            </div>
          </LiquidGlassCard>
        </ShimmerButton>
      </div> */}
    </div>
  );
};

export default Nav;
