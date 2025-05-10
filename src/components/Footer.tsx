import Image from "next/image";
import Logo from "../../public/logo-white.png";
import { IconBrandX, IconBrandTelegram } from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer className="w-full p-4 md:p-0 flex flex-wrap items-center justify-between gap-3 md:gap-0">
      <Image
        src={Logo}
        alt="quelldata logo"
        className="h-16 w-auto object-contain"
      />

      <div className="flex-col md:flex-row flex md:items-center md:gap-4">
        <a
          href="https://docs.google.com/document/d/1pf0d2hTgcYuyCITyckDe_NVR-GTkHxhxYYSo1o2J1n8/edit?tab=t.0#heading=h.2r5czahnzror"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm md:text-base underline"
        >
          Privacy Policy
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm md:text-base underline"
        >
          Terms & Conditions
        </a>
      </div>

      <div className="flex items-center gap-4">
        <a
          href="https://x.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandX />
        </a>
        <a
          href="https://t.me/yourchannel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandTelegram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
