import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Chat() {
  return (
    <>
      <div className="min-h-screen bg-white flex flex-col justify-center items-center px-6 md:px-20 py-20">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Contact
          </h1>
          <p className="text-gray-600 mt-4">
            Let’s build something great together
          </p>
        </div>

        {/* Contact Card */}
        <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-2xl p-10 space-y-6 shadow-sm">

          {/* WhatsApp */}
          <div className="flex items-center gap-4 p-4 rounded-xl transition duration-300 hover:bg-gray-50 hover:shadow-md hover:-translate-y-1">
            <FontAwesomeIcon icon={faWhatsapp} className="text-2xl text-green-600" />
            <a
              href="https://wa.me/919142158588"
              className="text-lg text-gray-800 font-medium transition duration-300 hover:text-green-600 hover:underline"
            >
              +91 9142158588
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4 p-4 rounded-xl transition duration-300 hover:bg-gray-50 hover:shadow-md hover:-translate-y-1">
            <FontAwesomeIcon icon={faPhone} className="text-2xl text-blue-600" />
            <a
              href="tel:9142158588"
              className="text-lg text-gray-800 font-medium transition duration-300 hover:text-blue-600 hover:underline"
            >
              +91 9142158588
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4 p-4 rounded-xl transition duration-300 hover:bg-gray-50 hover:shadow-md hover:-translate-y-1">
            <FontAwesomeIcon icon={faEnvelope} className="text-2xl text-red-500" />
            <a
              href="mailto:raushanraj.tech.ai@gmail.com"
              className="text-lg text-gray-800 font-medium transition duration-300 hover:text-red-500 hover:underline"
            >
              raushanraj.tech.ai@gmail.com
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-4 p-4 rounded-xl transition duration-300 hover:bg-gray-50 hover:shadow-md hover:-translate-y-1">
            <FontAwesomeIcon icon={faLinkedin} className="text-2xl text-blue-700" />
            <a
              href="https://www.linkedin.com/in/raushanrajdeveloper"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-800 font-medium transition duration-300 hover:text-blue-700 hover:underline"
            >
              LinkedIn Profile
            </a>
          </div>

          {/* GitHub */}
          <div className="flex items-center gap-4 p-4 rounded-xl transition duration-300 hover:bg-gray-50 hover:shadow-md hover:-translate-y-1">
            <FontAwesomeIcon icon={faGithub} className="text-2xl text-gray-900" />
            <a
              href="https://github.com/khiladi01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-800 font-medium transition duration-300 hover:text-black hover:underline"
            >
              GitHub Profile
            </a>
          </div>

        </div>
      </div>
    </>
  );
}

export default Chat;
