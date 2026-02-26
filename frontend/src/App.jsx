import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
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
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-violet-100 selection:text-violet-700">
      <Navbar />
      <main>
        <Hero />

        {/* Expertise Showcase with Modern Layout */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-foreground">
                Core <span className="text-violet-600">Specializations</span>
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto rounded-full"></div>
              <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
                Deep expertise in architecting high-availability systems and seamless user experiences.
              </p>
            </motion.div>

            <div className="p-4 md:p-8 bg-background rounded-[3rem] shadow-2xl shadow-primary/5 border border-border">
              <GlowingEffectDemo />
            </div>
          </div>
        </section>

        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
