import "../style/Edit.css";
import Firstprojectimage from "../assets/project/PP IMG (1).png";
import Secondprojectimage from "../assets/project/PP IMG (2).png";
import Thirdprojectimage from "../assets/project/PP IMG (3).png";
import Fourthprojectimage from "../assets/project/PP IMG (4).png";
import Fifthprojectimage from "../assets/project/PP IMG (5).png";
import cineflow from "../assets/project/cineflow.png";
import destination from "../assets/project/destination.png";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";

function Project() {

  const projectRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      projectRef.current.querySelectorAll(".animate-project"),
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  const projects = [
  {
    id: "project1",
    title: "MedVault ➤ Full Stack Medical",
    image: Fifthprojectimage,
    tools: ["Next.js", "Tailwind", "MongoDB", "Express", "Node"],
    link: "https://medvault-three.vercel.app",
  },
  {
    id: "project2",
    title: "Cineflow ➤ Full Stack Movie Platform",
    image: cineflow,
    tools: ["React.js", "Tailwind", "MongoDB", "Express", "Node"],
    link: "https://cineflow-ten.vercel.app/",
  },
  {
    id: "project3",
    title: "Billionary ➤ 3D Landing Page",
    image: Thirdprojectimage,
    tools: ["Vite", "React", "Tailwind", "Spline"],
    link: "https://khiladi01.github.io/3D-Landing-Page/",
  },
  {
    id: "project4",
    title: "Destination ➤ Travel Landing Page",
    image: destination,
    tools: ["React.js", "Tailwind CSS"],
    link: "https://destinations-tau.vercel.app/#",
  },
  {
    id: "project5",
    title: "PixelProfile ➤ Resume Builder",
    image: Secondprojectimage,
    tools: ["Vite", "React", "Tailwind"],
    link: "https://khiladi01.github.io/Resume-Builder/",
  },
  {
    id: "project6",
    title: "Velomart ➤ E-Commerce Clone",
    image: Firstprojectimage,
    tools: ["Vite", "React", "Tailwind"],
    link: "https://khiladi01.github.io/Admin-Dashboard/",
  },
];

  return (
    <div
      className="min-h-screen bg-white flex flex-col items-center px-4 py-16"
      ref={projectRef}
    >
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-16 animate-project">
        My Projects
      </h1>

      {/* Projects */}
      <div className="w-full max-w-6xl flex flex-col gap-16">
        {projects.map(({ id, title, image, tools, link }) => (
          <div
            key={id}
            className="flex flex-col-reverse md:flex-row items-center gap-10 animate-project"
          >
            {/* Left Side - Details */}
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                {title}
              </h2>

              <div className="flex flex-wrap gap-3 mb-6">
                {tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 text-sm border border-gray-300 rounded-full text-gray-700"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <Link
                to={link}
                className="inline-block px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition duration-300"
              >
                View Live Site
              </Link>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1">
              <img
                src={image}
                alt={title}
                className="w-full rounded-lg shadow-md hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
