import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["Home", "About", "Portfolio", "Projects", "Skills", "Services"];

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md"
      style={{
        background: "linear-gradient(to right, rgba(255,255,255,0.8), rgba(255,255,255,0.6))",
      }}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        {/* Brand */}
        <h1
          className="text-xl sm:text-2xl font-bold text-indigo-600 cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          Sweta Sunidhi
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {links.map((link) => (
            <motion.li
              key={link}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                to={link.toLowerCase()}
                smooth={true}
                offset={-80} // adjust for navbar height
                duration={500}
                className="cursor-pointer hover:text-indigo-600 transition"
              >
                {link}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 w-full z-40 backdrop-blur-md"
            style={{
              background: "linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0.8))",
            }}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <ul className="flex flex-col items-center space-y-4 py-4 font-medium">
              {links.map((link) => (
                <motion.li
                  key={link}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to={link.toLowerCase()}
                    smooth={true}
                    offset={-80} // same offset for mobile
                    duration={500}
                    className="w-full text-center cursor-pointer hover:text-indigo-600 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {link}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
