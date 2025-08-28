import InstaIcon from "../assets/icons/insta.svg";
import XSocial from "../assets/icons/x-social.svg";
import TikTokIcon from "../assets/icons/tiktok.svg";
import YoutubeIcon from "../assets/icons/youtube.svg";

export const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-black py-5 text-white/60 border-t border-white/20"
    >
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4">
          <div>®2025 One Task, Inc. All rights reserved</div>
          <ul className="flex sm:flex-inline text-center gap-2.5">
            <li className="transition hover:brightness-125 cursor-pointer">
              <InstaIcon />
            </li>
            <li className="transition hover:brightness-125 cursor-pointer">
              <XSocial />
            </li>
            <li className="transition hover:brightness-125 cursor-pointer">
              <TikTokIcon />
            </li>
            <li className="transition hover:brightness-125 cursor-pointer">
              <YoutubeIcon />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
