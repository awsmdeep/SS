import React from "react";
import { motion } from "framer-motion";
import education from "../data/education";
import SectionTitle from "../components/SectionTitle";

function About() {
  return (
    <section id="about" className="py-20">
      {/* About Me Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <SectionTitle title="About Me" subtitle="Who I am and my journey" />
      </motion.div>

      {/* About Me Text */}
      <motion.div
        className="max-w-4xl mx-auto text-center text-lg text-gray-700 mb-12 px-4 sm:px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p>
          I am pursuing a Master’s in Psychology at KIIT Bhubaneswar, with a strong foundation
          in English literature. I have experience in clinical psychology, research methods, and
          behavior therapy through internships at Fortis Hospital, Socially Souled, and Tata Motors
          Hospital. Alongside my academic journey, I am passionate about creative and content writing.
        </p>
      </motion.div>

      {/* Education Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <SectionTitle title="Education" subtitle="My Academic Journey" />
      </motion.div>

      <div className="relative max-w-4xl mx-auto mt-16 px-4 sm:px-6">
        {/* Vertical Line for md+ (behind everything) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-indigo-200 h-full hidden md:block z-0"></div>

        {education
          .slice() // create a shallow copy
          .map((edu, index) => (
            <motion.div
              key={index}
              className={`mb-16 flex flex-col md:flex-row items-start w-full break-words relative z-10 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              {/* Step Number / Icon */}
              <div className="relative flex flex-col items-center mb-4 md:mb-0 z-10">
                <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold shadow-md z-10">
                  {index + 1}
                </div>
                <div className="hidden md:block w-1 h-full bg-indigo-300 mt-2 md:mt-4 z-0"></div>
              </div>

              {/* Card */}
              <div className="w-full md:w-1/2 px-0 md:px-6 mt-4 md:mt-0 z-10">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition break-words">
                  <h3 className="text-xl font-bold text-indigo-600 break-words">{edu.degree}</h3>
                  <p className="text-gray-600 break-words">{edu.institution}</p>
                  <p className="mt-2 text-gray-500 break-words">{edu.year}</p>
                </div>
              </div>
            </motion.div>
          ))}
      </div>
    </section>
  );
}

export default About;
