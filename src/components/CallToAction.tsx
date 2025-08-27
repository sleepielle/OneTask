import helixImage from "../assets/images/helix2.png";
import emojiStar from "../assets/images/emojistar.png";
import Image from "next/image";

export const CallToAction = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24 text-center">
      <div className="container max-w-xl relative">
        <Image
          src={helixImage}
          alt="helix-image"
          className="absolute -right-56 top-16 hidden sm:inline-flex"
        />
        <Image
          src={emojiStar}
          alt="emojistar-image"
          className="absolute -left-60 -top-12 hidden sm:inline-flex"
        />
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
          <button className="bg-white text-black h-12 rounded-lg px-5">
            Get access
          </button>
        </form>
      </div>
    </div>
  );
};
