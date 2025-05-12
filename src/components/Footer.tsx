import { memo } from 'react';
import Image from 'next/image';
import LogoWhite from '../../public/logo-white.png';
import { IconBrandX, IconBrandTelegram } from '@tabler/icons-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 p-4 md:mb-10 md:gap-0">
      <Link href="/">
        <Image src={LogoWhite} alt="quelldata logo" className="h-16 w-auto object-contain" />
      </Link>

      <div className="flex flex-col md:flex-row md:items-center md:gap-4">
        <Link href="/privacy-policy" className="text-sm underline md:text-base">
          Privacy Policy
        </Link>
        <Link href="/terms-conditions" className="text-sm underline md:text-base">
          Terms & Conditions
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <a href="https://x.com/Quelldata_io" target="_blank" rel="noopener noreferrer">
          <IconBrandX />
        </a>
        <a href="https://t.me/Quelldata" target="_blank" rel="noopener noreferrer">
          <IconBrandTelegram />
        </a>
      </div>
    </footer>
  );
};

export default memo(Footer);
