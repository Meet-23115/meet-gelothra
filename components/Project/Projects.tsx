import React from "react";
import { SafariDemo } from "./safari-demo";
import { Safari } from "@/components/ui/safari";

const Projects = () => {
  return (
    <div className="Projects">
      <div className="Content">
        <div className="safari-wrapper">

        <Safari
        className=" "
          url="magicui.design"
          videoSrc="https://videos.pexels.com/video-files/27180348/12091515_2560_1440_50fps.mp4"
        />
        </div>
      </div>
    </div>
  );
};

export default Projects;
