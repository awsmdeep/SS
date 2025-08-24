import React from "react";
import { motion } from "framer-motion";
import projects from "../data/projects";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import { formatDate } from "../hooks/formatDate";

function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16 text-center px-4 sm:px-6 lg:px-8"
      >
        <SectionTitle
          title="Projects Timeline"
          subtitle="Chronological showcase of my notable projects"
        />
      </motion.div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Central Vertical Line for md+ screens */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full hidden md:block"></div>

        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`mb-16 flex flex-col md:flex-row items-start w-full relative break-words ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            {/* Step Number / Icon */}
            <motion.div
              className="relative flex flex-col items-center mb-4 md:mb-0"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.3 + 0.2 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold shadow-md">
                {index + 1}
              </div>
              <div className="hidden md:block w-1 h-full bg-blue-300 mt-2 md:mt-4"></div>
            </motion.div>

            {/* Card */}
            <motion.div
              className="w-full md:w-1/2 px-0 md:px-4 mt-4 md:mt-0 break-words"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 + 0.3 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition break-words">
                <h3 className="text-xl font-bold text-indigo-600 break-words">{project.title}</h3>
                <p className="text-gray-600 break-words">{formatDate(project.date)}</p>
                <p className="mt-2 text-gray-500 break-words">{project.description}</p>
                {project.link && project.link !== "#" && (
                  <Button
                    href={project.link}
                    variant="outline"
                    className="mt-4 w-full text-center"
                  >
                    View Project
                  </Button>
                )}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
