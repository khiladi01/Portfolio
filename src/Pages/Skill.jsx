import { Link } from "react-router-dom";

function Skill() {

  const skills = [
    "React.js",
    "Next.js",
    "JavaScript ES6",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Material UI",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
    "JWT Authentication",
    "Role Based Access Control",
    "React Hooks",
    "Context API",
    "Git",
    "GitHub",
    "Postman",
    "Vercel",
    "Render"
  ];

  return (
    <>
      <div className="min-h-screen bg-white px-6 md:px-20 py-20">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            My Skills
          </h1>
          <p className="text-gray-600 mt-4">
            Technologies and tools I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-lg py-4 text-center font-medium text-gray-800 pointer-events-none"
            >
              {skill}
            </div>
          ))}

        </div>

      </div>
    </>
  );
}

export default Skill;
