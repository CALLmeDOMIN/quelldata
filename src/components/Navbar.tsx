"use client";

import { useState } from "react";
import Image from "next/image";
import LogoWhite from "../../public/logo-white.png";
import LogoBlack from "../../public/quell-logo-black.png";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";

type TNavbarProps = {
  inHero?: boolean;
};

const Navbar = ({ inHero = false }: TNavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`relative z-50 flex w-full items-center justify-between ${
        inHero && "border-t"
      } border-b border-neutral-200 px-4 py-4 dark:border-neutral-800`}
    >
      <Image
        src={LogoWhite}
        alt="quelldata logo"
        className="dark:block hidden h-12 md:h-16 w-auto object-contain"
      />
      <Image
        src={LogoBlack}
        alt="quelldata logo"
        className="block dark:hidden  h-12 md:h-16 w-auto object-contain"
      />

      <button
        className="md:hidden z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <IconX className="h-8 w-8 cursor-pointer" />
        ) : (
          <IconMenu2 className="h-8 w-8 cursor-pointer" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white dark:bg-zinc-900 shadow-lg z-50 p-6 flex flex-col space-y-4"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="flex justify-between items-center ">
                <span className="text-2xl font-semibold">Menu</span>
                <button onClick={() => setIsOpen(false)}>
                  <IconX className="h-8 w-8 cursor-pointer" />
                </button>
              </div>

              <div className="flex flex-col space-y-2">
                <button className="px-4 text-left">
                  <span className="text-xl font-medium text-black dark:text-white cursor-pointer">
                    For businesses
                  </span>
                </button>

                <button className="px-4 text-left">
                  <span className="text-xl font-medium text-black dark:text-white cursor-pointer">
                    For users
                  </span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
