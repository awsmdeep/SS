import React from "react";
import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      className="relative bg-gray-900 text-gray-300 py-12 mt-12 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Animated Wave Background */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z"
            className="fill-gray-800"
          >
            <animate
              attributeName="d"
              dur="8s"
              repeatCount="indefinite"
              values="
                M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z;
                M0,0 C150,50 350,100 600,50 C850,0 1050,100 1200,50 L1200,120 L0,120 Z;
                M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z
              "
            />
          </path>
        </svg>
      </div>

      {/* Footer Content */}
      <div className="relative max-w-6xl mx-auto text-center px-4 sm:px-6 md:px-8">
        <p className="text-sm sm:text-base md:text-lg">
          © {new Date().getFullYear()} Sweta Sunidhi. All rights reserved.
        </p>

        <motion.div
          className="mt-4 text-xs sm:text-sm md:text-base flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span>📧 swetasunidhi3031@gmail.com</span>
          <span>📞 +91 9835458754</span>
          <span>📍 Bhubaneswar</span>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;
