import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/img.png"; // put your photo in src/assets/profile/

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center"
    >
      {/* Profile Photo with animation */}
      <motion.img
        src={profilePic}
        alt="Sweta Sunidhi"
        className="h-48 w-48 md:h-64 md:w-64 rounded-full object-cover border-4 border-indigo-500 shadow-lg"
        initial={{ opacity: 0, scale: 0.8, y: -30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.05, rotate: 2 }}
      />

      {/* Heading */}
      <motion.h2
        className="mt-8 text-4xl md:text-6xl font-extrabold text-gray-900"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Hi, I'm <span className="text-indigo-600">Sweta Sunidhi</span>
      </motion.h2>

      {/* Subheading */}
      <motion.p
        className="mt-4 text-lg md:text-xl max-w-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Master’s student in Psychology | Research Learner | Creative Writer
      </motion.p>

     
    </section>
  );
}

export default Home;
