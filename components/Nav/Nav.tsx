"use client";
import React, { useState } from "react";
import { LiquidGlassCard } from "../uilayouts/liquid-glass";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const [mobileNavHidden, setMobileNavHidden] = useState(true);
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
      <div className="Mobile-Nav">
        <div className="Mobile-nav-container">
          <LiquidGlassCard
            glowIntensity="xl"
            shadowIntensity="xl"
            borderRadius="10px"
            blurIntensity="sm"
            draggable
            className="mobile-liquid-glass"
          >
            <div
              className={`${!mobileNavHidden && "hidden"} nav-btn`}
              onClick={() => setMobileNavHidden(!mobileNavHidden)}
            >
              {" "}
              <Menu />{" "}
            </div>
            <div className={`${mobileNavHidden && "hidden"} mobile-nav-menu`}>
              <div
                className="close-btn"
                onClick={() => setMobileNavHidden(!mobileNavHidden)}
              >
                <X />
              </div>
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
    </div>
  );
};

export default Nav;
