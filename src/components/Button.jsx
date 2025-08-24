import React from "react";
import { motion } from "framer-motion";

function Button({ children, href, onClick, variant = "primary" }) {
  const baseStyles =
    "px-4 md:px-6 py-2 md:py-3 rounded-xl font-medium transition shadow hover:shadow-lg text-sm md:text-base";

  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "border border-indigo-600 text-indigo-600 hover:bg-indigo-50",
  };

  const classes = `${baseStyles} ${variants[variant]}`;

  const MotionButton = motion(href ? "a" : "button");

  return (
    <MotionButton
      href={href}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {children}
    </MotionButton>
  );
}

export default Button;
