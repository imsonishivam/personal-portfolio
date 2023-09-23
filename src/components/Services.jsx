import React from "react";
import { motion } from "framer-motion";
import { AiFillIeCircle, AiFillWindows } from "react-icons/ai";

const Services = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    three: {
      opacity: 0,
      x: "100%",
    },
  };
  return (
    <div id="services">
      <h2>Services</h2>
      <section>
        <motion.div
          className="serviceBox1"
          whileInView={animations.whileInView}
          initial={animations.one}
        >
          <h3>0+</h3>
          <span>Years Experience</span>
        </motion.div>
        <div className="serviceBox2">
          <AiFillIeCircle />
          <span>Web Development</span>
        </div>
        <div className="serviceBox2">
          <AiFillWindows />
          <span>Desktop Development</span>
        </div>
      </section>
    </div>
  );
};

export default Services;
