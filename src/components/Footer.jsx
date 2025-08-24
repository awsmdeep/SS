import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <motion.footer
      className="relative bg-gray-900 text-gray-300 py-16 overflow-hidden perspective-1000"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Layered Waves for 3D depth */}
      <div className="absolute top-0 left-0 w-full h-24 overflow-hidden">
        <svg
          className="relative block w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z"
            className="fill-gray-800 opacity-90"
          />
          <path
            d="M0,0 C150,80 350,20 600,40 C850,60 1050,10 1200,50 L1200,120 L0,120 Z"
            className="fill-gray-700 opacity-70"
          />
          <path
            d="M0,0 C150,50 350,0 600,30 C850,50 1050,0 1200,30 L1200,120 L0,120 Z"
            className="fill-gray-600 opacity-50"
          />
        </svg>
      </div>

      {/* Footer Content */}
      <div className="relative max-w-6xl mx-auto text-center px-4 sm:px-6 md:px-8">
        <p className="text-lg md:text-xl font-semibold text-indigo-400 mb-6">
          © {new Date().getFullYear()} Sweta Sunidhi
        </p>

        {/* Contact Info */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8 text-gray-300"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className="hover:text-indigo-500 cursor-pointer transition-colors duration-300">
            📧 swetasunidhi3031@gmail.com
          </span>
          <span className="hover:text-indigo-500 cursor-pointer transition-colors duration-300">
            📞 +91 9835458754
          </span>
          <span className="hover:text-indigo-500 cursor-pointer transition-colors duration-300">
            📍 Bhubaneswar
          </span>
        </motion.div>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-6 text-3xl md:text-4xl">
          {[
            { icon: <FaLinkedin />, link: "#" },
            { icon: <FaGithub />, link: "#" },
            { icon: <FaTwitter />, link: "#" },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              className="text-indigo-400 hover:text-indigo-600 transition-colors duration-300"
              whileHover={{ y: -6, scale: 1.25 }}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Bottom 3D Shadow */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"></div>
    </motion.footer>
  );
}

export default Footer;
