import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="flex justify-between text-gray-300 py-4 px-4 md:py-10 md:px-10 w-full bg-black">
      <div className="font-bold text-3xl">
        <h1>Fareha Hassan</h1>
      </div>

      <div
        className={`md:hidden cursor-pointer ${
          mobileMenuOpen ? "text-white" : "text-gray-300"
        }`}
        onClick={toggleMobileMenu}
      >
        {mobileMenuOpen ? (
          // Cross icon for closing the mobile menu
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          // Hamburger icon for opening the mobile menu
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </div>

      <ul
        className={`${
          mobileMenuOpen ? "block" : "hidden"
        } md:flex md:justify-between w-full md:w-auto`}
      >
        <li className="py-2 md:px-5 hover:text-gray-500 hover:underline hover:scale-105 duration-300 cursor-pointer">
          <Link href="/">Home</Link>
        </li>
        <li className="py-2 md:px-5 hover:text-gray-500 hover:underline hover:scale-105 duration-300 cursor-pointer">
          <Link href="/about">About</Link>
        </li>
        <li className="py-2 md:px-5 hover:text-gray-500 hover:underline hover:scale-105 duration-300 cursor-pointer">
          <Link href="/contact">Contact</Link>
        </li>
        {/* Additional menu items */}
      </ul>
    </header>
  );
};

export default Navbar;
