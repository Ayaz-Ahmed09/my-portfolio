"use client";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { gsap } from "gsap";

const PageTransition = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      const tl = gsap.timeline();
      tl.to(".transition-div", {
        duration: 0.5,
        scaleX: 1,
        transformOrigin: "left",
        stagger: 0.2,
      }).to(".transition-div", {
        duration: 0.5,
        scaleX: 0,
        transformOrigin: "right",
        delay: 0.3,
        stagger: 0.2,
      });
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className="relative">
      <div className="transition-div absolute top-0 left-0 w-1/4 h-full bg-blue-500 z-50"></div>
      <div className="transition-div absolute top-0 left-0 w-1/4 h-full bg-red-500 z-50"></div>
      <div className="transition-div absolute top-0 left-0 w-1/4 h-full bg-green-500 z-50"></div>
      {children}
    </div>
  );
};

export default PageTransition;
