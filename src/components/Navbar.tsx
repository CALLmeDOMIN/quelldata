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
      <div className="flex items-center">
        <button className="relative px-4 py-2 rounded-full bg-gray-200 dark:bg-zinc-800">
          For businesses
        </button>
        <button className="relative px-4 py-2 rounded-full ">For users</button>
      </div>
    </nav>
  );
};

export default Navbar;
