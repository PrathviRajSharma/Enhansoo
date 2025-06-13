import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const AboutUs = () => {
  return (
    <>
    <Navbar/>
      <div className="min-h-screen px-4 py-10 pt-[80px] md:pt-[100px] bg-gradient-to-br from-blue-700 via-indigo-900 to-indigo-950 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 ">
            About Enhanso
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Enhanso is your AI-powered companion that transforms ordinary images
            into high-definition masterpieces. Our mission is to make image
            enhancement as easy as a click, while ensuring your privacy and
            delivering lightning-fast performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16 max-w-6xl mx-auto text-center ">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 p-6 rounded-2xl shadow-lg hover:scale-105  transition-transform"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-green-300 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <h4 className="text-2xl font-bold text-blue-300 mb-4">Our Promise</h4>
          <p className="text-gray-300 max-w-xl mx-auto">
            We believe in delivering exceptional quality with full control over
            your content. No image is stored or misused. Just pure AI magic at
            your fingertips.
          </p>
        </motion.div>
      </div>
    </>
  );
};

const features = [
  {
    icon: "⚡️",
    title: "Lightning Fast",
    description:
      "Our AI enhances images in seconds without compromising quality.",
  },
  {
    icon: "🧠",
    title: "Smart AI Technology",
    description:
      "Powered by deep learning to bring out every detail in your images.",
  },
  {
    icon: "🛡️",
    title: "Privacy Centric",
    description:
      "We never store or share your images. All enhancements happen locally or securely.",
  },
];

export default AboutUs;
