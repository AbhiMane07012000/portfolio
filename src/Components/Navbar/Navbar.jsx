import React, { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative lg:flex justify-center items-center">
      <div className=" lg:w-[55vw]   flex justify-between items-center sticky lg:fixed lg:top-10  lg:shadow-3xl bg-white bg-opacity-[0.5] px-10  lg:rounded-full z-50  ">
        <Link to="#home" className="">
          <img
            className="h-10 lg:h-10  my-2 z-[3]"
            src="./main-logo.png"
            alt=""
          />
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link
            to="home"
            smooth={true}
            offset={0}
            duration={500}
            className="text-black cursor-pointer font-semibold font-montserrat hover:text-gray-900  "
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            offset={0}
            duration={1000}
            className="text-black cursor-pointer font-semibold font-montserrat hover:text-gray-900  "
          >
            About
          </Link>
          <Link
            to="skill"
            smooth={true}
            offset={0}
            duration={500}
            className="text-black cursor-pointer font-semibold font-montserrat hover:text-gray-900  "
          >
            Skill
          </Link>
          <Link
            to="contact"
            smooth={true}
            offset={0}
            duration={500}
            className="text-black cursor-pointer font-semibold font-montserrat hover:text-gray-900  "
          >
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          {isMenuOpen ? (
            <button
              onClick={toggleMenu}
              className="text-black font-semibold font-montserrat hover:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          ) : (
            <button
              onClick={toggleMenu}
              className="text-black font-semibold font-montserrat hover:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 9h16.5m-16.5 6.75h16.5"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden space-y-3 bg-white bg-opacity-[0.5] py-3">
          <Link
            to="home"
            className="block text-black font-semibold font-montserrat hover:text-gray-900 pl-16 py-2 "
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="about"
            className="block text-black font-semibold font-montserrat hover:text-gray-900 pl-16 py-2 "
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="skill"
            className="block text-black font-semibold font-montserrat hover:text-gray-900 pl-16 py-2 "
            onClick={toggleMenu}
          >
            Skills
          </Link>
          <Link
            to="contact"
            offset={50}
            className="block text-black font-semibold font-montserrat hover:text-gray-900 pl-16 py-2 "
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
