import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';
import { Footer } from './components/Footer.jsx';
import { GlowingEffectDemo } from './components/ui/glowing-effect-demo';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme !== null) {
      setDarkMode(savedTheme === 'true');
    } else {
      // Default to dark mode
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <motion.div 
      className="min-h-screen bg-background text-foreground transition-colors duration-500 ease-in-out"
      initial={false}
      animate={{
        backgroundColor: darkMode ? 'hsl(var(--background))' : 'hsl(var(--background))',
      }}
      transition={{ duration: 0.5 }}
    >
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        {/* Expertise Showcase with Glowing Effect */}
        <section className="section-padding bg-gradient-to-b from-background via-background to-muted/20 dark:from-background dark:via-background dark:to-muted/10">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Core Expertise</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto rounded mb-4"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Areas where I excel and bring value to every project
              </p>
            </motion.div>
            <GlowingEffectDemo />
          </div>
        </section>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
}

export default App;

