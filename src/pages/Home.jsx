import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center flex-1 text-center mt-20"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-6xl font-extrabold mb-4 drop-shadow-lg">Rahul Patnaik</h1>
      <p className="text-2xl">🚀 Portfolio in Progress</p>
    </motion.div>
  );
}
