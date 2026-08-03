"use client";
import Image from "next/image";
import Hero from "../../components/Hero/Hero";
import ReactLenis from "lenis/react";
import About from "../../components/About/About";
import Projects from "../../components/Project/Projects";
import Contact from "../../components/Contact/Contact";
import Head from "next/head";

export default function Home() {
  return (
    <ReactLenis root>
      
        <Hero />
        <About /> 
         <Projects />
        <Contact />
    </ReactLenis>
  );
}
