import Image from "next/image";
import Logo from "../../public/logo-white.png";

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
      <Image
        src={Logo}
        alt="quelldata logo"
        className="h-16 w-auto object-contain"
      />
    </nav>
  );
};

export default Navbar;
