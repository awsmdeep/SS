import React from "react";
import { motion } from "framer-motion";
import experience from "../data/experience";
import SectionTitle from "../components/SectionTitle";
import { Briefcase, Book } from "lucide-react"; // icons for experiences

function Portfolio() {
  const getIcon = (type) => {
    switch (type) {
      case "work":
        return <Briefcase size={36} />;
      case "internship":
        return <Book size={36} />;
      default:
        return <Briefcase size={36} />;
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16 text-center px-4 sm:px-6 lg:px-8"
      >
        <SectionTitle
          title="Portfolio / Experience"
          subtitle="Where I gained my knowledge"
        />
      </motion.div>

      {/* Cards Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4 sm:px-6">
        {experience.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl text-center transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Icon in Circle */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                {getIcon(exp.type)}
              </div>
            </div>

            <h3 className="text-xl font-bold text-indigo-600">{exp.role}</h3>
            <p className="text-gray-700 font-medium">{exp.company}</p>
            <p className="text-sm text-gray-500 mt-1">{exp.location}</p>
            <p className="mt-2 text-sm text-indigo-500 font-semibold">{exp.date}</p>
            <p className="mt-4 text-gray-600 text-sm leading-relaxed">{exp.details}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
