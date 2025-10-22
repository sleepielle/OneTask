"use client";
import Image from "next/image";
import CursorImage from "../assets/images/cursor.png";
import MessageImage from "../assets/images/message.png";
import { motion } from "framer-motion";
import Button from "@/components/Button";

const MotionImage = motion(Image);

export const Hero = () => {
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-[90px] relative overflow-clip ">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px]  rounded-[100%] bg-black  left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)]  top-[calc(100%-96px)] sm:top-[calc(100%-120px)]  "></div>

      <div className="container flex flex-col relative">
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="inline-flex gap-3 rounded-lg border border-white/30  px-2 py-1 hover:border-white/70"
          >
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)]  bg-clip-text [-webkit-background-clip:text] text-transparent  text-opacity-50">
              Version 2.0 is here
            </span>
            <span>Read here ➜</span>
          </a>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="inline-flex relative">
            <h1 className="font-bold text-7xl sm:text-9xl tracking-tighter p-4  text-center ">
              One Task
              <br />
              at a Time
            </h1>

            <MotionImage
              src={CursorImage}
              alt="cursor-image-3d"
              className="absolute right-[476px] top-[108px] hidden sm:inline hover:opacity-90"
              height={200}
              width={200}
              drag
              dragConstraints={{ left: -120, right: 120, top: -80, bottom: 80 }}
              dragElastic={0.15}
              dragMomentum={false}
              dragSnapToOrigin
            />

            <MotionImage
              src={MessageImage}
              alt="cursor-image-3d"
              className="absolute left-[490px] top-[70px] hidden sm:inline hover:opacity-90"
              height={200}
              width={200}
              drag
              dragConstraints={{
                left: -80,
                right: 160,
                top: -100,
                bottom: 100,
              }}
              dragElastic={0.15}
              dragSnapToOrigin
              dragMomentum={true}
            />
          </div>
          <p className="text-xl text-center mt-8 md:max-w-md px-2">
            Celebrate the joy of accomplishment with an app designed to track
            progress, motivate your efforts, and celebrate your success
          </p>

          <Button
            classname={
              "bg-white text-black rounded-lg font-medium mt-8 py-3 px-5 "
            }
            text={"Get for free"}
          />
        </div>
      </div>
    </div>
  );
};
