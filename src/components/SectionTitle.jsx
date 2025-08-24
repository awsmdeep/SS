import React from "react";
import { motion } from "framer-motion";

function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-12">
      {/* Title */}
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>

      {/* Subtitle (optional) */}
      {subtitle && (
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-600 mt-2 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

export default SectionTitle;
