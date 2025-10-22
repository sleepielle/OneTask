import Image from "next/image";
import Logo from "../assets/images/logosaas.png";
import MenuIcon from "../assets/icons/menu.svg";
import Button from "./Button";

export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="py-4 flex items-center justify-between">
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,rgb(252,214,255,0.7),rgb(41,216,255,0.7),rgb(255,253,128,0.7),rgb(248,154,191,0.7),rgb(252,214,255,0.7))] blur-md"></div>
            <Image src={Logo} alt="saas-logo" className="h-12 w-12 relative" />
          </div>

          <div className=" inline-flex justify-center items-center rounded-lg md:hidden">
            <button className="bg-white py-2 px-4 rounded-lg">
              Get for free
            </button>
          </div>

          <nav className=" items-center gap-6 hidden sm:flex">
            <a
              href="#features"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Features
            </a>
            <a
              href="#showcase"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Showcase
            </a>
            <a
              href="#faq"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              FAQ
            </a>

            <a
              href="#contact"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Contact
            </a>

            <Button
              classname={"bg-white py-2 px-4 rounded-lg"}
              text={"Get for free"}
            />
          </nav>
        </div>
      </div>
    </div>
  );
};
