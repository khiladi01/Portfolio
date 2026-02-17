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
    <nav className="h-[100px] bg-white flex justify-between items-center p-5 select-none relative shadow-md">
      
      {/* Left Icon */}
      <div className="flex items-center gap-4">
        <div id="icon" className="rounded-2xl">
          <img src={Icon} alt="logo" className="h-[32px] w-[35px] border-[2px] border-gray-300 rounded-2xl" />
        </div>
      </div>

      {/* Hamburger Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-gray-800 p-2 focus:outline-none z-50 relative hover:scale-110 transition-transform duration-200"
        aria-label="Toggle menu"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span className={`w-full h-0.5 bg-gray-800 transform transition-all duration-200 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-full h-0.5 bg-gray-800 transition-all duration-200 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-full h-0.5 bg-gray-800 transform transition-all duration-200 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </div>
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex text-md font-semibold tracking-wider uppercase gap-10">
        <Link
          className="text-black hover:text-gray-700 hover:scale-105 hover:underline hover:underline-offset-2 transition-all duration-200"
          to="/"
        >
          Home
        </Link>

        {/* Download Resume Button */}
        <a
          href="../assets/Resume/Raushan_9142158588.pdf"
          download="Raushan_Raj_Resume.pdf"
          className="text-black hover:text-gray-700 hover:scale-105 hover:underline hover:underline-offset-2 transition-all duration-200"
        >
          Download Resume
        </a>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-[100px] left-0 w-full bg-white transition-all duration-200 ease-in-out transform ${
          isMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'
        } z-40 shadow-lg`}
      >
        <div className="flex flex-col items-center py-4 space-y-4">
          <Link
            className="text-black hover:text-gray-700 hover:scale-105 hover:underline hover:underline-offset-2 transition-all duration-200 uppercase font-medium tracking-wider w-full text-center py-2"
            to="/"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>

          <a
            href="/resume.pdf"
            download="Raushan_Raj_Resume.pdf"
            className="text-black hover:text-gray-700 hover:scale-105 hover:underline hover:underline-offset-2 transition-all duration-200 uppercase font-medium tracking-wider w-full text-center py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
