import React from "react";
import { SafariDemo } from "./safari-demo";
import { Safari } from "@/components/ui/safari";
import { Carousel } from "@/components/ui/carousel";
import { CarouselOrientation } from "./Carousel";
import { Particles } from "@/components/ui/particles";

const Projects = () => {
  return (
    <div className="Projects" id="projects">
      <Particles className="absolute h-full w-full" color="white" />
      <div className="Content">
        <CarouselOrientation />
      </div>
    </div>
  );
};

export default Projects;
