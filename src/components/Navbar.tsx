'use client';

import { useState, memo } from 'react';
import Image from 'next/image';
import LogoWhite from '../../public/logo-white.png';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

type TNavbarProps = {
  inHero?: boolean;
};

const Navbar = ({ inHero = false }: TNavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`relative z-50 flex w-full items-center justify-between ${
        inHero && 'border-t'
      } border-b border-neutral-800 px-4 py-4`}
    >
      <Link href="/">
        <Image src={LogoWhite} alt="quelldata logo" className="h-12 w-auto object-contain md:h-16" />
      </Link>

      {!inHero && (
        <Link href="/" className="hidden cursor-pointer text-xl font-medium text-white md:block">
          Home
        </Link>
      )}

      <button className="z-50 md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
        {isOpen ? <IconX className="h-8 w-8 cursor-pointer" /> : <IconMenu2 className="h-8 w-8 cursor-pointer" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 z-50 flex h-full w-[80%] max-w-sm flex-col space-y-4 bg-zinc-900 p-6 shadow-lg"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-semibold">Menu</span>
                <button onClick={() => setIsOpen(false)}>
                  <IconX className="h-8 w-8 cursor-pointer" />
                </button>
              </div>

              <Link href="/" className="cursor-pointer pl-4 text-xl font-medium text-white">
                Home
              </Link>
              <Link href="/privacy-policy" className="cursor-pointer pl-4 text-xl font-medium text-white">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="cursor-pointer pl-4 text-xl font-medium text-white">
                Terms & Conditions
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default memo(Navbar);
