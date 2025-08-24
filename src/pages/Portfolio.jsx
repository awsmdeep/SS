import React from "react";
import { motion } from "framer-motion";
import experience from "../data/experience";
import SectionTitle from "../components/SectionTitle";

function Portfolio() {
  return (
    <section id="portfolio" className="py-20">
      {/* Title Animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <SectionTitle
          title="Portfolio / Experience"
          subtitle="Where I gained my knowledge"
        />
      </motion.div>

      {/* Flip Cards */}
      <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto mt-12">
        {experience.map((exp, index) => (
          <motion.div
            key={index}
            className="relative h-64 [perspective:1000px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.div
              className="absolute w-full h-full rounded-xl shadow-lg cursor-pointer bg-white"
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.6 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front Side */}
              <div
                className="absolute w-full h-full flex flex-col items-center justify-center p-6 text-center"
                style={{ backfaceVisibility: "hidden" }}
              >
                <h3 className="text-xl font-bold text-indigo-600">{exp.role}</h3>
                <p className="text-gray-700 font-medium">{exp.company}</p>
                <p className="text-sm text-gray-500 mt-1">{exp.location}</p>
                <p className="mt-2 text-sm text-indigo-500 font-semibold">
                  {exp.date}
                </p>
              </div>

              {/* Back Side */}
              <div
                className="absolute w-full h-full bg-indigo-600 text-white rounded-xl p-6 flex items-center justify-center text-center"
                style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
              >
                <p className="text-sm leading-relaxed">{exp.details}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
