import React from "react";
import { SafariDemo } from "./safari-demo";
import { Safari } from "@/components/ui/safari";
import { Carousel } from "@/components/ui/carousel";
import { CarouselOrientation } from "./Carousel";

const Projects = () => {
  return (
    <div className="Projects" id="projects">
      <div className="Content">
        <CarouselOrientation />
      </div>
    </div>
  );
};

export default Projects;
