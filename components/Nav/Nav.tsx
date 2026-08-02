import React from "react";
import { LiquidGlassCard } from "../uilayouts/liquid-glass";

const Nav = () => {
  return (
    <div className="Nav">
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
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
      </LiquidGlassCard>
    </div>
  );
};

export default Nav;
