import Image from 'next/image';
import Logo from '../../public/logo-white.png';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50 flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
      <Image src={Logo} alt="quelldata logo" className="h-16 w-auto object-contain" />

      <div className="hidden md:flex items-center space-x-4">
        <button className="px-4 py-2 rounded-full bg-gray-200 dark:bg-zinc-800">For businesses</button>
        <button className="px-4 py-2 rounded-full">For users</button>
      </div>

      <button className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
        {isOpen ? <X className="h-8 w-8 cursor-pointer" /> : <Menu className="h-8 w-8 cursor-pointer" />}
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
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white dark:bg-zinc-900 shadow-lg z-50 p-6 flex flex-col space-y-4"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <Image src={Logo} alt="quelldata logo" className="h-10 w-auto object-contain" />
              <div className="flex justify-between items-center ">
                <span className="text-2xl font-semibold">Menu</span>
                <button onClick={() => setIsOpen(false)}>
                  <X className="h-8 w-8 cursor-pointer" />
                </button>
              </div>

              <div className="flex flex-col space-y-4 mt-8">
                <button className="px-4 py-2 text-left">
                  <span className="text-xl font-semibold text-black dark:text-white cursor-pointer">For businesses</span>
                </button>

                <button className="px-4 py-2 text-left">
                  <span className="text-xl font-semibold text-black dark:text-white cursor-pointer">For users</span>
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
