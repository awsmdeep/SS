import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { Brain, PenTool } from "lucide-react"; // icons for services

function Services() {
  const services = [
    {
      title: "Psychology",
      details:
        "Case history analysis, research assistance, behavior therapy support",
      icon: <Brain size={36} />,
    },
    {
      title: "Writing",
      details: "Creative writing, content writing",
      icon: <PenTool size={36} />,
    },
  ];

  return (
    <section id="services" className="py-20">
      {/* Title Animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <SectionTitle title="Services" subtitle="What I can do for you" />
      </motion.div>

      {/* Service Cards */}
      <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto mt-12">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl text-center transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Icon in Circle */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                {service.icon}
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
            <p className="mt-3 text-gray-600">{service.details}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services;
