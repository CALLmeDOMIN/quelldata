import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo-white.png";
import { IconBrandX, IconBrandTelegram } from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between px-4">
      <Image
        src={Logo}
        alt="quelldata logo"
        className="h-16 w-auto object-contain"
      />

      {/* Linki wewnętrzne */}
      <div className="flex items-center gap-4">
        <Link href="/privacy-policy" className="underline">
          Privacy Policy
        </Link>
        <Link href="/terms" className="underline">
          Terms & Conditions
        </Link>
      </div>

      {/* Ikony z linkami zewnętrznymi */}
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
