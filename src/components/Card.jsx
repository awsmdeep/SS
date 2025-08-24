import React from "react";
import { motion } from "framer-motion";

function Card({ title, subtitle, description }) {
  return (
    <motion.div
      className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Title */}
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-indigo-600">
        {title}
      </h3>

      {/* Subtitle (Optional) */}
      {subtitle && (
        <p className="text-sm sm:text-base md:text-lg text-gray-500 mt-1">
          {subtitle}
        </p>
      )}

      {/* Description (Optional) */}
      {description && (
        <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-700">
          {description}
        </p>
      )}
    </motion.div>
  );
}

export default Card;
