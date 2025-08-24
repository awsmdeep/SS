import React from "react";
import { motion } from "framer-motion";
import skills from "../data/skills";
import SectionTitle from "../components/SectionTitle";

const barBg = "bg-gray-200/70 dark:bg-white/10";
const barFill =
  "h-3 rounded-full bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400";

function Skills() {
  return (
    <section id="skills" className="py-20">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <SectionTitle
          title="Skills & Expertise"
          subtitle="What I bring to the table"
        />
      </motion.div>

      {/* Progress Bars */}
      <div className="max-w-3xl mx-auto mt-10 space-y-6 px-4 sm:px-0">
        {skills.map((skill, i) => (
          <div key={skill.name} className="w-full">
            {/* Label Row */}
            <div className="flex items-baseline justify-between mb-2">
              <span className="text-sm sm:text-base font-medium text-gray-900">
                {skill.name}
              </span>
              <motion.span
                className="text-xs sm:text-sm font-semibold text-indigo-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.05 }}
                viewport={{ once: false, amount: 0.4 }}
                aria-hidden="true"
              >
                {skill.level}%
              </motion.span>
            </div>

            {/* Track + Animated Fill */}
            <div
              className={`w-full ${barBg} rounded-full h-3 overflow-hidden`}
              role="progressbar"
              aria-valuenow={skill.level}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${skill.name} proficiency`}
            >
              <motion.div
                className={barFill}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, ease: "easeInOut", delay: i * 0.08 }}
                viewport={{ once: false, amount: 0.4 }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
