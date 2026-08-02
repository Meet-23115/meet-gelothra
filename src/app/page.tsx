"use client";
import Image from "next/image";
import Hero from "../../components/Hero/Hero";
import ReactLenis from "lenis/react";
import About from "../../components/About/About";
import Projects from "../../components/Project/Projects";

export default function Home() {
  return (
    <ReactLenis root>
      <div>
        <Hero />
        <About />
        <Projects />
      </div>
    </ReactLenis>
  );
}
