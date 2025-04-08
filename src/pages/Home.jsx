import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  const skills = [
    { category: "Programming", items: ["Python", "C++", "C"] },
    { category: "Frameworks", items: ["PyTorch", "TensorFlow", "Transformers", "Diffusers", "Pennylane", "Langchain", "Llamaindex", "FastAPI", "Flask"] },
    { category: "Soft Skills", items: ["Leadership", "Technical Communication", "Problem-Solving", "Interpersonal Reasoning"] }
  ];

  const experiences = [
    {
      role: "Research Assistant",
      company: "Carnegie Mellon University (CMU) - Computer Vision Lab",
      period: "Dec 2024–Present",
      description: "Researching Diffusion architectures to enhance text generation in state-of-the-art Multimodal AI within images along with its spatial orientation capabilities"
    },
    {
      role: "Research Assistant",
      company: "WIRIN LABS, RVCE",
      period: "Oct 2023–Jul 2024",
      description: "Fine-tuned Llama-2 7B for Kannada using Hugging Face Transformers + QLORA. Built RAG model with Llamaindex, GPT-4 API, and SerpAPI"
    },
    {
      role: "Founder",
      company: "Mark.AI",
      period: "2023–Jan 2024",
      description: "Developed Botpress chatbots with Python/JavaScript data logging and knowledge graphs. Successfully piloted at yoga studio and fitness center"
    }
  ];

  const projects = [
    {
      title: "Parkinson's Freezing of Gait Detection",
      description: "Predicted FOG events with 65% RAM reduction for data loading. Achieved 0.7567 MAP using LSTM model architecture. Working with accelerometer and RaspberryPi 5 for inflatable safety device deployment."
    },
    {
      title: "model2gguf - Python Package",
      description: "CLI tool for converting Hugging Face models to GGUF format with Ollama integration utilizing llama.cpp"
    },
    {
      title: "Titan Architecture (Small-scale)",
      description: "PyTorch implementation achieving 79% val accuracy on SST2 with memory efficiency insights"
    },
    {
      title: "Reinforcement Learning (Laptop-scale)",
      description: "30-40% memory optimization over PPO with Flask API (<500ms response). Runs on 16GB RAM with 25% relevance improvement via custom rewards"
    }
  ];

  const education = [
    {
      degree: "Bachelor of Engineering",
      institution: "RV College of Engineering",
      period: "2023-2027",
      score: "9.28 CGPA"
    },
    {
      degree: "12th Grade (CBSE)",
      institution: "Narayana CO-KAVERI Bhavan",
      score: "93%"
    },
    {
      degree: "10th Grade (CBSE)",
      institution: "Narayana Olympiad School",
      score: "95.4%"
    }
  ];

  const publications = [
    {
      title: "Robust Brain Tumor Classification via InceptionResNetV2",
      venue: "CSITSS 2024",
      date: "Jan 2025",
      link: "ieeexplore.ieee.org/document/10817000",
      description: "99.45% accuracy in 30 epochs with custom callback for recall optimization"
    }
  ];

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-[80vh] px-4 bg-blue-900 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="w-full max-w-5xl mx-auto mb-16 text-center">
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8 p-6 bg-blue-700 rounded-full inline-block"
        >
          <span className="text-4xl">🚀</span>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-6xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Rahul Patnaik
        </motion.h1>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 mb-6 text-blue-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <span>📍 Bangalore, India</span>
          <span>📧 rpatnaik2005@gmail.com</span>
          <span>📱 +91 9686632808</span>
        </motion.div>

        <motion.p 
          className="text-xl md:text-2xl text-blue-200 mb-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Computer Science student and AI researcher passionate about machine learning, 
          diffusion models, and quantum computing.
        </motion.p>

        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link to="/about">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg transition-all"
            >
              About Me
            </motion.button>
          </Link>
          <a href="https://github.com/RahulPatnaik" target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg transition-all"
            >
              GitHub
            </motion.button>
          </a>
          <a href="https://linkedin.com/in/rahul-patnaik-239980289" target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg transition-all"
            >
              LinkedIn
            </motion.button>
          </a>
          <Link to="/contact">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg transition-all"
            >
              Contact
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* Experience Section */}
      <motion.section 
        className="w-full max-w-5xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Professional Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="bg-blue-800/50 p-6 rounded-xl backdrop-blur-sm border border-blue-700/50 hover:border-blue-500/50 transition-all"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
            >
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <div className="flex justify-between items-center mb-2">
                <p className="text-blue-300">{exp.company}</p>
                <p className="text-blue-300 text-sm">{exp.period}</p>
              </div>
              <p className="text-blue-100">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        className="w-full max-w-5xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-blue-800/50 p-6 rounded-xl backdrop-blur-sm border border-blue-700/50 hover:border-blue-500/50 transition-all"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-blue-100">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        className="w-full max-w-5xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div 
              key={index}
              className="bg-blue-800/50 p-6 rounded-xl backdrop-blur-sm border border-blue-700/50"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
            >
              <h3 className="text-xl font-semibold mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-blue-700/50 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Publications Section */}
      <motion.section 
        className="w-full max-w-5xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Research Publications</h2>
        <div className="grid grid-cols-1 gap-6">
          {publications.map((pub, index) => (
            <motion.div 
              key={index}
              className="bg-blue-800/50 p-6 rounded-xl backdrop-blur-sm border border-blue-700/50 hover:border-blue-500/50 transition-all"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">{pub.title}</h3>
                <p className="text-blue-300 text-sm">{pub.date}</p>
              </div>
              <p className="text-blue-300 mb-2">{pub.venue} | <a href={`https://${pub.link}`} target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-200">{pub.link}</a></p>
              <p className="text-blue-100">{pub.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section 
        className="w-full max-w-5xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              className="bg-blue-800/50 p-6 rounded-xl backdrop-blur-sm border border-blue-700/50 hover:border-blue-500/50 transition-all"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
            >
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-blue-300">{edu.institution}</p>
              {edu.period && <p className="text-blue-300 text-sm">{edu.period}</p>}
              <p className="text-blue-100 font-medium mt-2">{edu.score}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="w-full max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
        <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
          Interested in collaborating on AI research, ML projects, or just want to chat about technology? Reach out!
        </p>
        <Link to="/contact">
          <motion.button
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-lg transition-all text-lg font-medium"
          >
            Get In Touch
          </motion.button>
        </Link>
      </motion.section>
    </motion.div>
  );
}