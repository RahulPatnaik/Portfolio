import { motion } from 'framer-motion';
import { useState } from 'react';

// Icons
const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    // For now, we'll just simulate a successful submission
    setIsSubmitted(true);
    
    // Reset after 5 seconds for demo purposes
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 5000);
  };

  return (
    <motion.div
      className="flex flex-col min-h-[80vh] px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
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
            <span className="text-4xl">📧</span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Let's Connect
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-blue-200 mb-2 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Have a project in mind or just want to chat?
          </motion.p>
          
          <motion.p 
            className="text-lg text-blue-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            I'm open to collaborations, research opportunities, and discussions about AI and machine learning.
          </motion.p>
        </motion.div>

        {/* Contact Form and Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <motion.div 
            className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 shadow-xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full py-12"
              >
                <div className="mb-6 p-4 bg-green-500/20 rounded-full">
                  <CheckIcon />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Message Sent!</h3>
                <p className="text-blue-200 text-center">
                  Thanks for reaching out. I'll get back to you as soon as possible.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
                
                <div className="mb-6">
                  <label className="block text-blue-200 mb-2 text-sm font-medium" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-blue-900/50 border border-blue-700 text-white placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-blue-200 mb-2 text-sm font-medium" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-blue-900/50 border border-blue-700 text-white placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-blue-200 mb-2 text-sm font-medium" htmlFor="message">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg bg-blue-900/50 border border-blue-700 text-white placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Hi Rahul, I'd like to discuss..."
                    required
                  ></textarea>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-lg font-medium transition-all shadow-lg shadow-blue-900/30"
                >
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>
          
          {/* Contact Info */}
          <motion.div 
            className="flex flex-col space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            {/* Direct Contact */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 shadow-xl">
              <h2 className="text-2xl font-bold mb-6">Contact Details</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-blue-200">Email</h3>
                  <a 
                    href="mailto:rpatnaik2005@gmail.com" 
                    className="text-white hover:text-blue-300 transition-colors flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    rpatnaik2005@gmail.com
                  </a>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-blue-200">Location</h3>
                  <p className="text-white flex items-center">
                    <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    Bangalore, India
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-blue-200">Phone</h3>
                  <a 
                    href="tel:+919686632808" 
                    className="text-white hover:text-blue-300 transition-colors flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    +91 9686632808
                  </a>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 shadow-xl">
              <h2 className="text-2xl font-bold mb-6">Connect Online</h2>
              
              <div className="grid grid-cols-1 gap-4">
                <a 
                  href="https://linkedin.com/in/rahul-patnaik-239980289" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-blue-800/40 hover:bg-blue-700/40 rounded-lg transition-all"
                >
                  <span className="bg-blue-700/50 p-2 rounded-lg mr-4">
                    <LinkedInIcon />
                  </span>
                  <div>
                    <span className="block font-medium">LinkedIn</span>
                    <span className="text-blue-300 text-sm">linkedin.com/in/rahul-patnaik</span>
                  </div>
                </a>
                
                <a 
                  href="https://github.com/RahulPatnaik" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-blue-800/40 hover:bg-blue-700/40 rounded-lg transition-all"
                >
                  <span className="bg-blue-700/50 p-2 rounded-lg mr-4">
                    <GithubIcon />
                  </span>
                  <div>
                    <span className="block font-medium">GitHub</span>
                    <span className="text-blue-300 text-sm">github.com/RahulPatnaik</span>
                  </div>
                </a>
                
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-blue-800/40 hover:bg-blue-700/40 rounded-lg transition-all"
                >
                  <span className="bg-blue-700/50 p-2 rounded-lg mr-4">
                    <TwitterIcon />
                  </span>
                  <div>
                    <span className="block font-medium">Twitter</span>
                    <span className="text-blue-300 text-sm">@RahulPatnaik</span>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Availability Banner */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          <div className="inline-flex items-center bg-gradient-to-r from-blue-800/40 via-blue-700/40 to-blue-800/40 px-6 py-3 rounded-full">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            <span className="text-blue-200">Available for freelance projects & research collaborations</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}