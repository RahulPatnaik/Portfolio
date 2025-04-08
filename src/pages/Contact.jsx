import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <motion.div
        className="text-center mt-20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-semibold mb-2">Contact</h1>
        <p className="text-lg max-w-2xl mx-auto">
          You can reach me at <span className="font-bold">rpatnaik2005@gmail.com</span>
        </p>
        </motion.div>
    );
  }
  