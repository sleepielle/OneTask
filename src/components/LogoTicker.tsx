import Image from "next/image";
import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

export const LogoTicker = () => {
  return (
    <div className="bg-black py-[72px]">
      <div className="container">
        <div className="flex items-center justify-center flex-col pt-8 ">
          <h2 className="text-white/70 text-center m-8 text-xl">
            Trusted by the worlds most innovative teams
          </h2>
          <div
            className="
            relative overflow-hidden mt-9
            before:content-[''] before:absolute before:inset-y-0 before:left-0 before:w-5
            before:bg-gradient-to-r before:from-black before:to-black/0
            after:content-[''] after:absolute after:inset-y-0 after:right-0 after:w-5
            after:bg-gradient-to-l after:from-black after:to-black/0
          "
          >
            <div className="flex gap-16">
              {images.map((logo) => (
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  key={logo.alt}
                  className="flex-none h-8 w-auto"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
