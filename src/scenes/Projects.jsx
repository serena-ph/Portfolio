import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import React from "react";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};
const Project = ({ title }) => {
  const projectTitle = title.split(" ").join("-").toLowerCase();
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
  bg-grey z-30 flex flex-col justify-center items-center p-16 text-deepblue`;
  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          eaque necessitatibus? Vel, dolore. 
        </p>
        <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADING */}
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            MY <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          alias aliquid at aliquam illum ratione rerum quasi magnam! Dignissimos
          recusandae consectetur iure hic non voluptatum cumque commodi
          voluptatem id nulla.
        </p>
      </motion.div>

      {/* Projects */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          <div
            className="flex justify-center text-center items-center p-10 bg-red
          max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project title="Project 1" />
          <Project title="Project 2" />
          {/* row2 */}
          <Project title="Project 3" />
          <Project title="Project 4" />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
          max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
