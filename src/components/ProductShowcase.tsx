"use client";
import Image from "next/image";
import appScreen from "../assets/images/app-screen.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export const ProductShowcase = () => {
  const appImage = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ["start end", "end end"],
  });

  useEffect(() => {
    scrollYProgress.on("change", (latestValue) =>
      console.log("latest value", latestValue)
    );
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <div className="bg-black py-[72px] bg-[linear-gradient(to_bottom,#000,#4e258c)]">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-white font-bold text-5xl tracking-tighter text-center sm:text-6xl">
            Intuitive Interface
          </h2>
          <p className="text-white/70 text-center max-w-xl text-lg mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes,
            one task at a time.
          </p>
          <motion.div
            style={{
              opacity: opacity,
              rotateY: rotateX,
              transformPerspective: "800px",
              transition: "ease",
            }}
          >
            <Image
              ref={appImage}
              src={appScreen}
              alt="product-screenshot"
              className="mt-14 border border-[#4e258c] hover:border-white/50 rounded-xl hover:brightness-150 transition duration-300 ease-in-out"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
