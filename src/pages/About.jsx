import { motion } from 'framer-motion';
import profilePhoto from '/home/rahul-patnaik/Workspace/Portfolio/src/assets/imageself.jpg';

// Component for skill badge
const SkillBadge = ({ skill }) => (
  <motion.span 
    className="px-4 py-2 bg-blue-700/50 rounded-xl text-sm font-medium m-1 inline-block"
    whileHover={{ y: -2, backgroundColor: 'rgba(59, 130, 246, 0.6)' }}
  >
    {skill}
  </motion.span>
);

// Component for timeline item
const TimelineItem = ({ year, title, description }) => (
  <motion.div 
    className="flex mb-12 relative"
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="mr-4">
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-12 h-12 flex items-center justify-center font-bold shadow-lg">
        {year}
      </div>
      <div className="w-0.5 h-full bg-blue-600/40 absolute left-6 top-12 -z-10"></div>
    </div>
    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-lg flex-1">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-blue-200">{description}</p>
    </div>
  </motion.div>
);

export default function About() {
  // Technical skills
  const technicalSkills = [
    "Python", "C++", "C", "PyTorch", "TensorFlow", 
    "Transformers", "Diffusers", "Pennylane", "LangChain", 
    "LlamaIndex", "FastAPI", "Flask", "GGUF Conversion"
  ];
  
  // Soft skills
  const softSkills = [
    "Leadership", "Technical Communication", "Problem-Solving", 
    "Research", "Interpersonal Reasoning", "Community Building"
  ];
  
  // Timeline data
  const timeline = [
    {
      year: '2025',
      title: 'Published Research Paper at CSITSS',
      description: 'Robust Brain Tumor Classification via InceptionResNetV2 with 99.45% accuracy in 30 epochs'
    },
    {
      year: '2024',
      title: 'Research Assistant at CMU Computer Vision Lab',
      description: 'Researching Diffusion architectures to enhance text generation in state-of-the-art Multimodal AI'
    },
    {
      year: '2023',
      title: 'Founded Mark.AI',
      description: 'Developed Botpress chatbots with Python/JavaScript data logging and knowledge graphs'
    },
    {
      year: '2023',
      title: 'Started at RV College of Engineering',
      description: 'Began B.E. in Computer Science with a focus on AI and machine learning'
    }
  ];

  // Sections fade in sequence with staggered delay
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      className="max-w-5xl mx-auto py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <motion.div
          initial={{ scale: 0.9, rotate: -5 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, type: "spring" }}
          className="mb-6 p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full inline-block"
        >
          <span className="text-4xl">👨‍💻</span>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          About Me
        </motion.h1>
      </motion.div>

      {/* Content Sections */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {/* Profile Photo */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-1 flex flex-col items-center md:items-start"
        >
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-1 rounded-xl shadow-xl mb-6 w-full max-w-xs">
          <div className="relative w-full h-full overflow-hidden">
              <img 
                src={profilePhoto} 
                alt="Rahul Patnaik" 
                className="w-full h-full object-cover object-[center_10%]"
                style={{ 
                  height: '120%', // Extra 20% to allow for cropping
                  marginTop: '-10%' // Pull image up to cut bottom
                }}
              />
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-xl w-full max-w-xs">
            <h2 className="text-xl font-bold mb-4">Quick Info</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-300 mr-2">📚</span>
                <span>B.E. Computer Science<br/><span className="text-blue-300 text-sm">RVCE (2023-2027)</span></span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-300 mr-2">📍</span>
                <span>Bangalore, India</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-300 mr-2">🔬</span>
                <span>AI Researcher & ML Engineer</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-300 mr-2">🌟</span>
                <span>9.28 CGPA</span>
              </li>
            </ul>
          </div>
        </motion.div>
        
        {/* Bio and Skills */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-2"
        >
          {/* Bio */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 shadow-xl mb-8">
            <h2 className="text-2xl font-bold mb-6">My Journey</h2>
            <div className="space-y-4 text-lg">
              <p>
                I'm Rahul, an enthusiastic ML engineer and Computer Science student at RV College of Engineering. My passion lies at the intersection of artificial intelligence, research, and community building.
              </p>
              <p>
                With a strong foundation in PyTorch and TensorFlow, I enjoy replicating and improving upon research papers, often diving deep into the mathematics behind various models to understand their inner workings.
              </p>
              <p>
                My experience spans from fine-tuning large language models to developing RAG systems and implementing efficient ML architectures. I'm particularly fascinated by diffusion models and quantum computing applications in AI.
              </p>
              <p>
                Beyond technical work, I'm deeply involved in leadership roles and community engagement, organizing workshops and hackathons to share knowledge and foster collaboration in the AI community.
              </p>
              <p>
                I'm excited about the future of AGI and robotics, and I'm committed to contributing to these fields through my research and projects.
              </p>
            </div>
          </div>
          
          {/* Skills */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 shadow-xl mb-8">
            <h2 className="text-2xl font-bold mb-6">Skills</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-200">Technical Skills</h3>
              <div className="flex flex-wrap">
                {technicalSkills.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} />
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-200">Soft Skills</h3>
              <div className="flex flex-wrap">
                {softSkills.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Timeline Section */}
      <motion.div
        className="mt-12 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-10 text-center">My Timeline</h2>
        
        <div className="ml-6">
          {timeline.map((item, index) => (
            <TimelineItem 
              key={index}
              year={item.year}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </motion.div>
      
      {/* Interests Section */}
      <motion.div
        className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
      >
        <h2 className="text-2xl font-bold mb-6">Research Interests</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-800/30 p-6 rounded-xl border border-blue-700/30 hover:border-blue-500/50 transition-all">
            <h3 className="text-xl font-semibold mb-3">Diffusion Models</h3>
            <p className="text-blue-200">
              Exploring state-of-the-art diffusion architectures for enhanced text generation and multimodal capabilities.
            </p>
          </div>
          
          <div className="bg-blue-800/30 p-6 rounded-xl border border-blue-700/30 hover:border-blue-500/50 transition-all">
            <h3 className="text-xl font-semibold mb-3">Quantum ML</h3>
            <p className="text-blue-200">
              Applying quantum computing approaches to enhance feature extraction in medical image classification.
            </p>
          </div>
          
          <div className="bg-blue-800/30 p-6 rounded-xl border border-blue-700/30 hover:border-blue-500/50 transition-all">
            <h3 className="text-xl font-semibold mb-3">Model Optimization</h3>
            <p className="text-blue-200">
              Developing techniques for memory and compute optimization in large-scale neural networks.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}