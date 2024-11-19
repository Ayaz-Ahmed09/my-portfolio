"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import Typed from "react-typed";
import { useSpring, animated } from "@react-spring/web";

const Hero = () => {
  useEffect(() => {
    gsap.from(".hero-title", {
      duration: 2,
      y: -200,
      ease: "bounce",
    });

    gsap.from(".hero-subtitle", {
      duration: 2,
      opacity: 0,
      stagger: 0.5,
      ease: "power1.in",
      delay: 2,
    });

    gsap.from(".hero-btn", {
      duration: 1.5,
      opacity: 0,
      scale: 0.5,
      ease: "back.out(1.7)",
      delay: 3,
    });
  }, []);

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1500 },
    delay: 3000,
  });

  return (
    <div className="hero-section h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <h1 className="hero-title text-5xl font-bold text-white mb-4">
        FRONT END DEVELOPER
      </h1>
      <animated.div style={fadeIn}>
        <Typed
          className="hero-subtitle text-3xl text-gray-200 mb-4"
          strings={["Hi There, I'm Ayaz Ahmed", "at your service"]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </animated.div>
      <button className="hero-btn px-6 py-3 bg-white text-blue-500 font-semibold rounded-full shadow-lg">
        Explore More
      </button>
    </div>
  );
};

export default Hero;
