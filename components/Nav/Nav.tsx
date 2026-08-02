"use client";
import React from "react";
import { LiquidGlassCard } from "../uilayouts/liquid-glass";

const Nav = () => {
  return (
    <div className="Nav">
      <div className="main-nav">
        <LiquidGlassCard
          glowIntensity="xl"
          shadowIntensity="xl"
          borderRadius="50px"
          blurIntensity="sm"
          draggable={false}
          className="liquid-glass"
        >
          <div className="Content">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Let's Talk</a>
              </li>
              <li>
                <a
                  href="/Meet-Gelothra.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </LiquidGlassCard>
      </div>
    </div>
  );
};

export default Nav;
