"use client"
import * as React from "react";
import type { CarouselApi } from "@/components/ui/carousel";
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
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (!api || paused) return;

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
  const intervalRef = React.useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      if (!api) return;

      const current = api.selectedScrollSnap();
      const last = api.scrollSnapList().length - 1;

      current === last ? api.scrollTo(0) : api.scrollNext();
    }, 5000);
  };

  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };
  

const [isMobile, setIsMobile] = React.useState(false);

React.useEffect(() => {
  const check = () => setIsMobile(window.innerWidth < 768);

  check();

  window.addEventListener("resize", check);
  return () => window.removeEventListener("resize", check);
}, []);

  return (
    <Carousel
      setApi={setApi}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      orientation="vertical"
      opts={{
        align: "start",
        watchDrag : !isMobile
      }}
      className="w-full h-[80%] "
    >
      <CarouselContent className=" h-full w-full carousel ">
        <CarouselItem className="basis-full w-full h-full flex items-center justify-center carousel-item ">
  <div className="w-full h-full project-container flex items-center justify-center">
    <div className="project-item">
      <h1>Hackathon-Winning AI Agent</h1>
      <p>
        Built an AI agent that understands natural language and performs
        system-level operations such as launching applications, executing
        terminal commands, managing files, and automating multi-step workflows.
        Includes a real-time visualization interface that displays the agent's
        reasoning and execution process, showcasing expertise in AI agents,
        tool orchestration, and human-AI interaction.
      </p>
    </div>
    <div className="flex carousel-browser">
      <Backlight blur={20} className="w-full">
        <Safari
          url="Ai.Com"
          className="browser"
          images={["ai1.png", "ai2.png", "ai3.png", "ai4.png"]}
        />
      </Backlight>
    </div>
  </div>
</CarouselItem>

<CarouselItem className="basis-full w-full h-full flex items-center justify-center carousel-item ">
  <div className="w-full h-full project-container flex items-center justify-center">
    <div className="project-item">
      <h1>Business Management System (BMS)</h1>
      <p>
        Developed a scalable SaaS platform for project management, team
        collaboration, and business operations. Features role-based access,
        task management, real-time messaging, analytics dashboards, and
        workflow automation, demonstrating full-stack enterprise application
        development and scalable architecture.
      </p>
    </div>
    <div className="flex carousel-browser">
      <Backlight blur={20} className="w-full">
        <Safari
          url="bms.gelothra.com"
          images={["/bms1.png", "/bms2.png", "bms3.png"]}
        />
      </Backlight>
    </div>
  </div>
</CarouselItem>

<CarouselItem className="basis-full w-full h-full flex items-center justify-center carousel-item ">
  <div className="w-full h-full project-container flex items-center justify-center">
    <div className="project-item">
      <h1>Freelance E-Commerce Platform</h1>
      <p>
        Designed and built a production-ready e-commerce platform for a client
        with secure authentication, product management, shopping cart,
        checkout, order tracking, and an admin dashboard. Focused on
        performance, scalability, and delivering a seamless shopping
        experience.
      </p>
    </div>
    <div className="flex carousel-browser">
      <Backlight blur={20} className="w-full">
        <Safari
          url="Freelance word"
          images={[
            "/freelance1.png",
            "/freelance2.png",
            "/freelance3.png",
          ]}
        />
      </Backlight>
    </div>
  </div>
</CarouselItem>
       {/* <CarouselItem className="basis-full w-full h-full items-center justify-center carousel-item ">
          <div className=" w-full project-container flex gap-[50px] items-center justify-center ">
            <div className=" project-item">
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
            <div className="flex carousel-browser">
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
        <CarouselItem className="basis-full w-full h-full flex items-center justify-center carousel-item ">
          <div className=" w-full project-container flex gap-[50px] items-center justify-center ">
            <div className=" project-item">
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
            <div className="flex carousel-browser">
              <Backlight blur={20} className="w-full">
                 <Safari
                  url="Freelance word"
                  images={[
                    "/freelance1.png",
                    "/freelance2.png",
                    "/freelance3.png",
                  ]}
                />
              </Backlight>
            </div>
          </div>
        </CarouselItem>  */}
        {/* <CarouselItem className="basis-full w-full flex items-center justify-center ">
          <div className="h-[500px] w-full project-container flex gap-[50px] items-center justify-center ">
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
            <div className="project-image w-[800px] flex">
              <Backlight blur={20} className="w-full h-[550px] item">
                <Safari
                  url="Freelance word"
                  images={[
                    "/freelance1.png",
                    "/freelance2.png",
                    "/freelance3.png",
                  ]}
                />
              </Backlight>
            </div>
          </div>
        </CarouselItem>

        <CarouselItem className="basis-full w-full flex items-center justify-center ">
          <div className="h-[500px] w-full project-container flex gap-[50px] items-center justify-center ">
            <div className=" project-item">
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
        </CarouselItem> */}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
