"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { images } from "@/types";

export const LogoTicker = () => {
  return (
    <div id="about" className="bg-black py-[72px]">
      <div className="container">
        <div className="flex items-center justify-center flex-col pt-8 ">
          <h2 className="text-white/70 text-center m-8 text-xl">
            Trusted by the worlds most innovative teams
          </h2>
          <div
            className="flex 
            relative overflow-hidden mt-9
            before:content-[''] before:absolute before:inset-y-0 before:left-0  before:w-20 
            before:bg-gradient-to-r before:from-black before:to-black/0 before:z-10
             after:content-[''] after:absolute after:inset-y-0 after:right-0 after:w-20
            after:bg-gradient-to-l after:from-black after:to-black/0 sm:after:w-80 sm:before:w-80 
          "
          >
            {/**if there is a jump, the problem is with the gaps */}
            <motion.div
              className="flex flex-none gap-16 pr-16  "
              transition={{ duration: 10, ease: "linear", repeat: Infinity }}
              initial={{ translateX: 0 }}
              animate={{ translateX: "-50%" }}
            >
              {Array.from({ length: 2 }).map((_, i) => (
                <React.Fragment key={i}>
                  {images.map((logo) => (
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      key={logo.alt}
                      className="flex-none h-8 w-auto"
                    />
                  ))}
                </React.Fragment>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
