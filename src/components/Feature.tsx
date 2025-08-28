"use client";
import { useEffect, useRef } from "react";
import EcosystemIcon from "../assets/icons/ecosystem.svg";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
const Feature = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  //motion values to avoid re-rendering everytime the mouse movies
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);

  //motion template
  const maskTemplate = useMotionTemplate`radial-gradient(100px at ${offsetX}px ${offsetY}px, black, transparent)`;
  const borderMask = useRef<HTMLDivElement>(null);
  /**listener for mouse position */
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      //difference where the mouse is at and the element is at

      if (!borderMask.current) return;
      const rect = borderMask.current?.getBoundingClientRect();
      offsetX.set(e.clientX - rect?.left);
      offsetY.set(e.clientY - rect?.top);
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [offsetX, offsetY]);

  return (
    <div
      key={title}
      className="flex-col flex items-center  text-center justify-center border border-white/30 px-5 py-10 rounded-xl sm:flex-1 relative"
    >
      <motion.div
        className="absolute inset-0 border-2 border-purple-400 rounded-xl"
        style={{
          WebkitMaskImage: maskTemplate,
          maskImage: maskTemplate,
        }}
        ref={borderMask}
      ></motion.div>
      <div className="inline-flex h-12 w-12 bg-white text-black justify-center items-center rounded-lg">
        <EcosystemIcon />
      </div>
      <h3 className="mt-6 font-bold">{title}</h3>
      <p className="mt-2 text-white/70">{description}</p>
    </div>
  );
};

export default Feature;
