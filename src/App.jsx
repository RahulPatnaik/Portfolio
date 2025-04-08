import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

// Icons
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" x2="20" y1="12" y2="12"></line>
    <line x1="4" x2="20" y1="6" y2="6"></line>
    <line x1="4" x2="20" y1="18" y2="18"></line>
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
        {/* Header with glass morphism effect */}
        <header 
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            scrolled 
              ? 'py-3 bg-blue-900/80 backdrop-blur-md shadow-lg' 
              : 'py-5 bg-transparent'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.7 }}
                className="mr-3 bg-gradient-to-br from-blue-400 to-purple-500 p-2 rounded-full"
              >
                <span className="text-xl">🚀</span>
              </motion.div>
              <motion.span 
                className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300"
                whileHover={{ scale: 1.05 }}
              >
                Rahul Patnaik
              </motion.span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                    isActive 
                      ? 'bg-blue-600/40 text-white' 
                      : 'text-blue-100 hover:text-white hover:bg-blue-600/30'
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                    isActive 
                      ? 'bg-blue-600/40 text-white' 
                      : 'text-blue-100 hover:text-white hover:bg-blue-600/30'
                  }`
                }
              >
                About
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  `px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                    isActive 
                      ? 'bg-blue-600/40 text-white' 
                      : 'text-blue-100 hover:text-white hover:bg-blue-600/30'
                  }`
                }
              >
                Contact
              </NavLink>
              
              <div className="h-6 w-px bg-blue-700/50 mx-2"></div>
              
              <a 
                href="https://github.com/RahulPatnaik" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-blue-200 hover:text-white hover:bg-blue-700/30 rounded-full transition-all"
              >
                <GithubIcon />
              </a>
              <a 
                href="https://linkedin.com/in/rahul-patnaik-239980289" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-blue-200 hover:text-white hover:bg-blue-700/30 rounded-full transition-all"
              >
                <LinkedInIcon />
              </a>
              <a 
                href="mailto:rpatnaik2005@gmail.com" 
                className="p-2 text-blue-200 hover:text-white hover:bg-blue-700/30 rounded-full transition-all"
              >
                <EmailIcon />
              </a>
            </nav>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 rounded-lg text-blue-200 hover:text-white hover:bg-blue-700/30"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
          
          {/* Mobile menu */}
          <motion.div 
            className="md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: isMenuOpen ? 'auto' : 0,
              opacity: isMenuOpen ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
          >
            {isMenuOpen && (
              <nav className="px-6 py-4 flex flex-col space-y-3 bg-blue-800/90 backdrop-blur-md border-t border-blue-700/50">
                <NavLink 
                  to="/" 
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) => 
                    `px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                      isActive 
                        ? 'bg-blue-600/40 text-white' 
                        : 'text-blue-100 hover:text-white hover:bg-blue-600/30'
                    }`
                  }
                >
                  Home
                </NavLink>
                <NavLink 
                  to="/about" 
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) => 
                    `px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                      isActive 
                        ? 'bg-blue-600/40 text-white' 
                        : 'text-blue-100 hover:text-white hover:bg-blue-600/30'
                    }`
                  }
                >
                  About
                </NavLink>
                <NavLink 
                  to="/contact" 
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) => 
                    `px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                      isActive 
                        ? 'bg-blue-600/40 text-white' 
                        : 'text-blue-100 hover:text-white hover:bg-blue-600/30'
                    }`
                  }
                >
                  Contact
                </NavLink>
                
                <div className="flex space-x-4 px-4 py-2">
                  <a 
                    href="https://github.com/RahulPatnaik" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 text-blue-200 hover:text-white hover:bg-blue-700/30 rounded-full transition-all"
                  >
                    <GithubIcon />
                  </a>
                  <a 
                    href="https://linkedin.com/in/rahul-patnaik-239980289" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 text-blue-200 hover:text-white hover:bg-blue-700/30 rounded-full transition-all"
                  >
                    <LinkedInIcon />
                  </a>
                  <a 
                    href="mailto:rpatnaik2005@gmail.com" 
                    className="p-2 text-blue-200 hover:text-white hover:bg-blue-700/30 rounded-full transition-all"
                  >
                    <EmailIcon />
                  </a>
                </div>
              </nav>
            )}
          </motion.div>
        </header>

        {/* Main content with parallax-like effect */}
        <motion.div 
          className="pt-24 pb-16 px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <main className="max-w-7xl mx-auto rounded-2xl overflow-hidden">
            {/* Background particles/stars effect */}
            <div className="fixed inset-0 -z-10">
              {Array.from({ length: 40 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-white/20"
                  style={{
                    width: Math.random() * 4 + 1 + 'px',
                    height: Math.random() * 4 + 1 + 'px',
                    left: Math.random() * 100 + '%',
                    top: Math.random() * 100 + '%',
                  }}
                  animate={{
                    opacity: [0.1, 0.5, 0.1],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: Math.random() * 5 + 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: Math.random() * 5,
                  }}
                />
              ))}
            </div>
            
            {/* Glass card for main content */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-2xl border border-white/20 min-h-[60vh]">
              <AnimatedRoutes />
            </div>
          </main>
        </motion.div>

        {/* Footer with improved design */}
        <footer className="bg-blue-900/30 backdrop-blur-sm border-t border-blue-800/50 py-8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex flex-col items-center md:items-start">
                <Link to="/" className="flex items-center mb-3">
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.7 }}
                    className="mr-2 bg-gradient-to-br from-blue-400 to-purple-500 p-1 rounded-full"
                  >
                    <span className="text-sm">🚀</span>
                  </motion.div>
                  <span className="font-bold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
                    Rahul Patnaik
                  </span>
                </Link>
                <p className="text-blue-200 text-sm">AI Researcher & CS Student</p>
              </div>
              
              <div className="flex flex-col items-center md:items-end">
                <div className="flex space-x-4 mb-3">
                  <a 
                    href="https://github.com/RahulPatnaik" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 text-blue-200 hover:text-white hover:bg-blue-700/30 rounded-full transition-all"
                  >
                    <GithubIcon />
                  </a>
                  <a 
                    href="https://linkedin.com/in/rahul-patnaik-239980289" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 text-blue-200 hover:text-white hover:bg-blue-700/30 rounded-full transition-all"
                  >
                    <LinkedInIcon />
                  </a>
                  <a 
                    href="mailto:rpatnaik2005@gmail.com" 
                    className="p-2 text-blue-200 hover:text-white hover:bg-blue-700/30 rounded-full transition-all"
                  >
                    <EmailIcon />
                  </a>
                </div>
                <p className="text-center md:text-right text-blue-200 text-sm">
                  © {new Date().getFullYear()} • Made with React + Vite
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;