import Image from "next/image";
import appScreen from "../assets/images/app-screen.png";

export const ProductShowcase = () => {
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
          <div className="mt-12">
            <Image
              src={appScreen}
              alt="app-screen"
              className="border border-[#4e258c] hover:border-white/50 rounded-xl transition-transform duration-300 ease-out [transform:perspective(1400px)] hover:[transform:perspective(1400px)_rotateY(6deg)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
