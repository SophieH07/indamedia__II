import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleNavbar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "About", url: "/about" },
    { id: 3, title: "Contact", url: "/contact" },
    { id: 4, title: "Carousel", url: "/carousel" },
    { id: 5, title: "Contract", url: "/contract" },
    { id: 6, title: "Social Media", url: "/social_media" },
    { id: 7, title: "Email", url: "/email" },
  ];

  return (
    <div className="fixed w-full z-20 top-0 left-0 px-2 bg-sky-700 dark:bg-sky-900 dark:text-white">
      <nav>
        <div className="flex flex-wrap items-center justify-between p-1 uppercase">
          <Link to="/" className="items-center">
            <span className="text-2xl font-semibold">Hello World</span>
          </Link>
          <div className="flex items-center">
            <div className="hidden md:flex lg:flex xl:flex xxl:flex font-bold">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.url}
                  className="hover:text-sky-400 pr-2"
                >
                  {link.title}
                </Link>
              ))}
              <div className="group flex cursor-pointer pr-2">
                <span>Dropdown</span>
                <svg
                  className="fill-current h-6 w-6 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
                <div
                  className="transform scale-0 group-hover:scale-100 absolute pt-7
  transition duration-150 ease-in-out"
                >
                  <Link
                    to="dropdown"
                    className="border-sm rounded bg-sky-700 dark:bg-sky-900 hover:text-sky-400 py-2 px-1"
                  >
                    Second level
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="bg-gray-200 inline-flex items-center justify-center p-1 rounded-md text-gray-800 hover:text-gray-400 hover:bg-gray-700 focus:outline-none dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
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
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
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
              )}
            </button>
          </div>
          <div
            className="cursor-pointer"
            onClick={() => setIsDarkTheme(!isDarkTheme)}
          >
            {isDarkTheme ? <FaMoon /> : <MdSunny />}
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div
          className="md:hidden h-screen text-centery overflow-y-auto"
          id="mobile-menu"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
            >
              {link.title}
            </a>
          ))}
          <div className="group inline-flex cursor-pointer text-gray-300 px-3 py-2 text-base font-medium">
            <span>Dropdown</span>
            <svg
              className="fill-current h-6 w-6 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
            <div className="transform scale-0 group-hover:scale-100 absolute pt-7 transition duration-150 ease-in-out">
              <Link to="dropdown" className="w-full hover:text-white">
                Second level
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
