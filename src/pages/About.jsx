import { motion } from 'framer-motion';

export default function About() {
    return (
        <motion.div
        className="text-center mt-20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-semibold mb-2">About Me</h1>
        <p className="text-lg text-justify max-w-2xl mx-auto">
          I'm Rahul, an enthusiastic ML engineer from RVCE. I’m passionate about AI, event leadership, and community building.
          I love exploring new technologies and sharing knowledge with others. I’m also a big fan of open-source projects and 
          enjoy contributing to them. I also work with PyTorch for my ML projects, often replicating various research papers.
          Having extensively worked with the maths behind models, I am more than curious to see the growth of AGI and Robotics,
          hopefully within this lifetime.
        </p>
        </motion.div>
    );
  }
  