import Image from "next/image";
import LogoWhite from "../../public/logo-white.png";
import LogoBlack from "../../public/quell-logo-black.png";
import { IconBrandX, IconBrandTelegram } from "@tabler/icons-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mx-auto md:mb-10 max-w-7xl p-4 md:p-0 flex flex-wrap items-center justify-between gap-3 md:gap-0">
      <Image
        src={LogoWhite}
        alt="quelldata logo"
        className="dark:block hidden h-16 w-auto object-contain"
      />
      <Image
        src={LogoBlack}
        alt="quelldata logo"
        className="block dark:hidden h-16 w-auto object-contain"
      />

      <div className="flex-col md:flex-row flex md:items-center md:gap-4">
        <Link href="/privacy-policy" className="text-sm md:text-base underline">
          Privacy Policy
        </Link>
        <Link
          href="/terms-conditions"
          className="text-sm md:text-base underline"
        >
          Terms & Conditions
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <a
          href="https://x.com/Quelldata_io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandX />
        </a>
        <a
          href="#"
          // target="_blank"
          // rel="noopener noreferrer"
        >
          <IconBrandTelegram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
