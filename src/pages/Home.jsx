import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/img.png";

function Home() {
  return (
    <section
      id="home"
      className="rounded-4xl w-full min-h-screen flex flex-col justify-center items-center text-center"
      style={{
        background: "linear-gradient(to bottom, #c7d2fe, #f9fafb)",
      }}
    >
      {/* Profile Photo */}
      <motion.img
        src={profilePic}
        alt="Sweta Sunidhi"
        className="h-48 w-48 md:h-64 md:w-64 rounded-full object-cover border-4 border-indigo-500 shadow-lg"
        initial={{ opacity: 0, scale: 0.8, y: -30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.05, rotate: 2 }}
      />

      {/* Heading */}
      <motion.h2
        className="mt-8 text-4xl md:text-6xl font-extrabold text-gray-900"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Hi, I'm <span className="text-indigo-600">Sweta Sunidhi</span>
      </motion.h2>

      {/* Subheading */}
      <motion.p
        className="mt-4 text-lg md:text-xl max-w-2xl text-gray-700"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Master’s student in Psychology | Research Learner | Creative Writer
      </motion.p>
    </section>
  );
}

export default Home;
