"use client";

import helixImage from "../assets/images/helix2.png";
import emojiStar from "../assets/images/emojistar.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import Button from "./Button";

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      id="contact"
      ref={containerRef}
      className="bg-black py-[72px] sm:py-40 text-center -mt-5 overflow-hidden"
    >
      <div className="container max-w-xl relative">
        {/* Helix floating animation */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -20, 0] }} // goes up then back down
          transition={{
            duration: 4, // how slow/fast
            repeat: Infinity, // loop forever
            ease: "easeInOut",
          }}
        >
          <Image
            src={helixImage}
            alt="helix-image"
            className="absolute top-6 left-[calc(100%+36px)]"
          />
        </motion.div>

        {/* Emoji star floating animation */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, 20, 0] }} // goes down then back up
          transition={{
            duration: 5, // slightly different for variety
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src={emojiStar}
            alt="emojistar-image"
            className="absolute -top-[120px] right-[calc(100%+24px)]"
          />
        </motion.div>

        {/* Text + form */}
        <h2 className="text-white text-center tracking-tighter text-5xl font-bold sm:text-6xl">
          Get instant access
        </h2>
        <p className="text-xl text-white/70 mt-5 sm:max-w-xl mx-auto">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
        <form
          action=""
          className="mt-10 flex flex-col gap-6 sm:gap-2.5 max-w-sm mx-auto sm:max-w-xl sm:flex-row"
        >
          <input
            type="email"
            placeholder="your@email.com"
            className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-gray-400 sm:flex-1 leading-none"
          />

          <Button
            classname="bg-white text-black h-12 rounded-lg px-5"
            text="Get access"
          />
        </form>
      </div>
    </div>
  );
};
