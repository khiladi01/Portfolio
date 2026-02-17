import { Link } from "react-router-dom";
import "boxicons/css/boxicons.min.css";
import "../style/Edit.css";
import Model from "../components/Model.jsx";
import { useEffect } from "react";
import Project from "./Project";
import Skill from "./Skill";
import Chat from "./Chat";

function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    sections.forEach((el) => observer.observe(el));

    return () => sections.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <div className="min-h-screen bg-white flex flex-col lg:flex-row justify-between items-start px-8 md:px-20 pt-8 pb-8 gap-16">
        {/* LEFT SIDE - INTRO */}
        <div className="flex-1 space-y-6 fade-in opacity-0 translate-y-10 transition-all duration-700">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Hi, I am Raushan Raj
          </h1>

          <p className="text-lg text-gray-600 max-w-lg">
            I love creating websites that people can easily use and enjoy. I
            like solving problems and building things that actually help others
            while learning and improving every day.
          </p>

          <p className="text-lg text-gray-600 max-w-lg">
            I consistently build real world projects to improve architecture,
            user experience, and code quality aiming to grow into a strong full
            stack engineer.
          </p>

          <Link
            to="/project"
            className="inline-flex items-center justify-center gap-2 px-6 md:px-12 lg:px-16 py-3 w-full sm:w-auto bg-black text-white rounded-md hover:bg-gray-800 transition duration-300"
          >
            <i className="bx bx-play-circle text-xl"></i>
            View Projects
          </Link>
        </div>

        {/* RIGHT SIDE - MODEL */}
        <div className="flex-1 flex justify-center lg:justify-end items-start relative fade-in opacity-0 translate-y-10 transition-all duration-700">
          <div className="relative group w-full max-w-md h-[450px] flex justify-center items-center">
            {/* Hover Message */}
            <div className="absolute -top-8 bg-black text-white text-sm px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 shadow-md">
              Hi 👋 I'm Robo Welcome To My Portfolio
            </div>

            {/* Robot Model */}
            <Model />
          </div>
        </div>
      </div>

      {/* PROJECTS SECTION */}
      <Project />

      {/* SKILLS SECTION */}
      <Skill />

      {/* CHAT SECTION */}
      <Chat />
    </>
  );
}

export default Home;
