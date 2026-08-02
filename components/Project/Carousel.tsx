import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Safari } from "@/components/ui/safari";

export function CarouselOrientation() {
  return (
    <Carousel
      orientation="vertical"
      opts={{
        align: "start",
      }}
      className="w-full "
    >
      <CarouselContent className="h-[600px] w-full ">
        <CarouselItem className="basis-full w-full flex items-center justify-center ">
          <div className="h-[500px] w-[800px] flex gap-4 items-center justify-between ">
            <div>
              <h1>First PRoject</h1>
            </div>
            <div className="h-[500px] w-auto flex">
              <Safari
                url="magicui.design"
                videoSrc="https://videos.pexels.com/video-files/27180348/12091515_2560_1440_50fps.mp4"
              />
            </div>
          </div>
        </CarouselItem>

        <CarouselItem className="basis-full w-full flex items-center justify-center ">
          <div className="h-[500px] w-[800px] flex gap-4 items-center justify-between ">
            <div>
              <h1>First PRoject</h1>
            </div>
            <div className="h-[500px] w-auto flex">
              <Safari
                url="magicui.design"
                videoSrc="https://videos.pexels.com/video-files/27180348/12091515_2560_1440_50fps.mp4"
              />
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
