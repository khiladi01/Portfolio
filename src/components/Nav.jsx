import "../style/Edit.css";
import Icon from "../assets/favicon/Icon.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="h-32 bg-white flex justify-between items-center px-6 md:px-10 select-none relative shadow-sm">
      
      {/* Logo */}
      <div className="flex items-center">
        <img
          src={Icon}
          alt="logo"
          className="h-20 w-20 rounded-xl transition-opacity duration-200 hover:opacity-80"
        />
      </div>

      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-gray-800 p-2 focus:outline-none z-50"
        aria-label="Toggle menu"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span
            className={`w-full h-0.5 bg-gray-800 transform transition-all duration-200 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-full h-0.5 bg-gray-800 transition-all duration-200 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-full h-0.5 bg-gray-800 transform transition-all duration-200 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </div>
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex text-sm font-semibold uppercase tracking-wide gap-10">
        <Link
          to="/"
          className="text-black hover:text-gray-600 transition-colors duration-200"
        >
          Home
        </Link>

        <a
          href="/Resume/Raushan_Raj_9142158588.pdf"
          download="Raushan_Raj_Resume.pdf"
          className="text-black hover:text-gray-600 transition-colors duration-200"
        >
          Download Resume
        </a>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-32 left-0 w-full bg-white transition-all duration-200 ease-in-out transform ${
          isMenuOpen
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-full opacity-0 invisible"
        } z-40 shadow-md`}
      >
        <div className="flex flex-col items-center py-6 space-y-4">
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="text-black hover:text-gray-600 transition-colors duration-200 uppercase font-medium tracking-wide w-full text-center py-2"
          >
            Home
          </Link>

          <a
            href="/public/Resume/Raushan_Raj_9142158588.pdf"
            download="Raushan_Raj_Resume.pdf"
            onClick={() => setIsMenuOpen(false)}
            className="text-black hover:text-gray-600 transition-colors duration-200 uppercase font-medium tracking-wide w-full text-center py-2"
          >
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
