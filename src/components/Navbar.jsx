import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  const closeMenu = () => {
    setOpenMenu(false);
  };

  return (
    <div className="w-screen h-auto relative z-50">
    
      <nav className="fixed top-0 w-full bg-gray-900 text-gray-100 flex items-center justify-between p-4 md:p-6 shadow-lg z-50">
    
        <h1 className="text-xl md:text-2xl cursor-pointer ml-4 md:ml-14 transform transition-all duration-300 hover:text-purple-500 hover:scale-110">
          Durga<span className="text-cyan-500">Mahesh</span>
        </h1>

        <div className="text-3xl cursor-pointer md:hidden" onClick={toggleMenu}>
          {openMenu ? <IoCloseOutline /> : <RiMenu3Fill />}
        </div>

        
        <ul className="hidden md:flex items-center gap-8 md:mr-14">
          <Link
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            hashSpy={true}
            className="cursor-pointer text-lg md:text-xl font-semibold hover:text-cyan-400 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            spy={true}
            hashSpy={true}
            className="cursor-pointer text-lg md:text-xl font-semibold hover:text-cyan-400 transition duration-300"
          >
            Skills
          </Link>
          <LinkR
            to="/projects"
            className="cursor-pointer text-lg md:text-xl font-semibold hover:text-cyan-400 transition duration-300"
          >
            Projects
          </LinkR>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            hashSpy={true}
            className="cursor-pointer text-lg md:text-xl font-semibold hover:text-cyan-400 transition duration-300"
          >
            ContactMe
          </Link>
        </ul>
        <div className="hidden md:flex gap-6 mr-4">
          <button
            onClick={() =>
              window.open("https://github.com/DurgaMahesh12", "_blank")
            }
            className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-cyan-500 transition-colors duration-300"
          >
            <FaGithub className="text-2xl" />
          </button>
          <button
            onClick={() =>
              window.open("https://www.linkedin.com/in/durgamahesh-vanum/", "_blank")
            }
            className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-cyan-500 transition-colors duration-300"
          >
            <FaLinkedin className="text-2xl" />
          </button>
        </div>
      </nav>

      
      {openMenu && (
        <ul className="fixed top-0 left-0 w-full h-screen bg-gray-900 text-gray-100 flex flex-col items-center justify-center gap-6 py-6 z-40 md:hidden">
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={closeMenu}
            className="cursor-pointer text-lg font-semibold hover:text-cyan-500 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            onClick={closeMenu}
            className="cursor-pointer text-lg font-semibold hover:text-cyan-500 transition duration-300"
          >
            Skills
          </Link>
          <LinkR
            to="/projects"
            onClick={closeMenu}
            className="cursor-pointer text-lg font-semibold hover:text-cyan-500 transition duration-300"
          >
            Projects
          </LinkR>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={closeMenu}
            className="cursor-pointer text-lg font-semibold hover:text-cyan-500 transition duration-300"
          >
            Contact
          </Link>

          <div className="flex gap-4 mt-4">
            <button
              onClick={() =>
                window.open("https://github.com/DurgaMahesh12", "_blank")
              }
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-cyan-500 transition-colors duration-300"
            >
              <FaGithub className="text-xl" />
            </button>
            <button
              onClick={() =>
                window.open("https://www.linkedin.com/in/durgamahesh-vanum/", "_blank")
              }
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-cyan-500 transition-colors duration-300"
            >
              <FaLinkedin className="text-xl" />
            </button>
          </div>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
