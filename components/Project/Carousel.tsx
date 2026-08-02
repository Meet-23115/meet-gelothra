import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Safari } from "@/components/ui/safari";
import { Backlight } from "@/components/ui/backlight";

export function CarouselOrientation() {
  const [api, setApi] = React.useState<CarouselApi | null>(null);

  React.useEffect(() => {
    if (!api) return;

    let interval: NodeJS.Timeout;

    const startAutoplay = () => {
      interval = setInterval(() => {
        const current = api.selectedScrollSnap();
        const last = api.scrollSnapList().length - 1;

        if (current === last) {
          api.scrollTo(0);
        } else {
          api.scrollNext();
        }
      }, 5000);
    };

    const stopAutoplay = () => {
      clearInterval(interval);
    };

    startAutoplay();

    // Pause on interaction
    api.on("pointerDown", stopAutoplay);
    api.on("pointerUp", startAutoplay);
    api.on("select", () => {
      stopAutoplay();
      startAutoplay(); // Restart timer after manual navigation
    });

    return () => {
      stopAutoplay();

      api.off("pointerDown", stopAutoplay);
      api.off("pointerUp", startAutoplay);
    };
  }, [api]);
  const intervalRef = React.useRef<NodeJS.Timeout>();

  const startAutoplay = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (!api) return;

      const current = api.selectedScrollSnap();
      const last = api.scrollSnapList().length - 1;

      current === last ? api.scrollTo(0) : api.scrollNext();
    }, 3000);
  };

  const stopAutoplay = () => {
    clearInterval(intervalRef.current);
  };
  return (
    <Carousel
      setApi={setApi}
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
      orientation="vertical"
      opts={{
        align: "start",
      }}
      className="w-full "
    >
      <CarouselContent className="h-[600px] w-full ">
        <CarouselItem className="basis-full w-full flex items-center justify-center ">
          <div className="h-[500px] w-full flex gap-[50px] items-center justify-center ">
            <div className="w-[400px] project-item">
              <h1>Freelance E-Commerce Platform</h1>
              <p>
                Developed a custom full-stack e-commerce platform for a client,
                transforming business requirements into a scalable,
                production-ready solution. The application features a responsive
                customer storefront, secure user authentication, product catalog
                management, shopping cart, checkout flow, order tracking, and an
                intuitive admin dashboard for inventory and business management.
                Optimized for speed, reliability, and user experience, the
                platform demonstrates end-to-end product development, from
                architecture and implementation to deployment and ongoing
                improvements.
              </p>
            </div>
            <div className="w-[800px] flex">
              <Backlight blur={20} className="w-full h-[550px]">
                <Safari
                  url="magicui.design"
                  images={[
                    "freelance1.png",
                    "freelance2.png",
                    "freelance3.png",
                  ]}
                />
              </Backlight>
            </div>
          </div>
        </CarouselItem>

        <CarouselItem className="basis-full w-full flex items-center justify-center ">
          <div className="h-[500px] w-full flex gap-[50px] items-center justify-center ">
            <div className="w-[400px] project-item">
              <h1>Business Management System (BMS)</h1>
              <p>
                A modern SaaS platform built to centralize business operations,
                project tracking, and team collaboration in a single intuitive
                workspace. Featuring role-based access, task management,
                real-time messaging, analytics dashboards, and workflow
                automation, the system empowers organizations to manage projects
                efficiently while improving communication, transparency, and
                overall productivity. Designed with a scalable architecture and
                a clean user experience, it demonstrates enterprise-grade
                application development from frontend to backend.
              </p>
            </div>
            <div className=" w-[800px] flex">
              <Backlight blur={20} className="w-full">
                <Safari
                  url="bms.gelothra.com"
                  images={["/bms1.png", "/bms2.png", "bms3.png"]}
                  // videoSrc="/bms1.png"
                />
              </Backlight>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
