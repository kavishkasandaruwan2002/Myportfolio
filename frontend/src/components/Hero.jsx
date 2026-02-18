import React, { Suspense, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail, Github } from 'lucide-react';
import myImage from '@/lib/my.jpeg';
const AuroraCanvas = React.lazy(() => import('./ui/cosmic-aurora'));

const Hero = () => {
  useEffect(() => {
    let cleanup;
    // dynamic import to avoid SSR issues
    import('@/lib/scroll').then((mod) => {
      if (mod && typeof mod.initParallax === 'function') {
        cleanup = mod.initParallax();
      }
    }).catch(() => { });

    return () => {
      if (typeof cleanup === 'function') cleanup();
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-violet-50 via-white to-indigo-50"
    >
      {/* Background aurora canvas handles visual effect */}

      <div className="container-custom section-padding relative z-10">
        <Suspense fallback={null}>
          <AuroraCanvas />
        </Suspense>

        <div className="mx-auto max-w-6xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <div className="main">
              <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                <div className="flex-shrink-0 relative group">
                  {/* Animated gradient border */}
                  <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-r from-violet-400 via-indigo-500 to-purple-500 opacity-60 blur-3xl group-hover:opacity-100 transition-opacity duration-700"></div>

                  {/* Outer glow ring */}
                  <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-r from-violet-400/50 via-indigo-500/50 to-purple-500/50 p-[2px]">
                    <div className="w-full h-full rounded-[2.5rem] bg-white"></div>
                  </div>

                  {/* Photo container with enhanced styling */}
                  <motion.div
                    whileHover={{ scale: 1.02, rotate: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative z-10 p-3"
                  >
                    <img
                      src={myImage}
                      alt="Kavishka"
                      className="w-56 h-56 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-[2.25rem] object-cover shadow-2xl relative z-10 transition-all duration-300 border-4 border-white"
                      style={{
                        boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.15)'
                      }}
                    />
                  </motion.div>

                  {/* Enhanced floating element */}
                  <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-white rounded-2xl shadow-2xl flex items-center justify-center animate-float z-20 border border-slate-100">
                    <Github className="w-8 h-8 text-slate-800" />
                  </div>
                </div>

                <div className="text-center md:text-left">
                  <motion.div variants={itemVariants} className="mb-6">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 text-violet-700 text-sm font-bold border border-violet-100 shadow-sm">
                      <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
                      </span>
                      Available for Projects
                    </span>
                  </motion.div>

                  <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-slate-900" data-scroll-speed="0.08">
                    Crafting <span className="gradient-text">Digital</span> <br />
                    Experiences.
                  </motion.h1>

                  <motion.p variants={itemVariants} className="mt-8 text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed font-medium" data-scroll-speed="0.05">
                    I'm <span className="text-slate-900 font-bold underline decoration-violet-500 decoration-4 underline-offset-4">Kavishka</span>, a System Architect building production-grade web applications and resilient DevOps pipelines.
                  </motion.p>

                  <motion.div variants={itemVariants} className="mt-10 flex flex-wrap justify-center md:justify-start gap-5">
                    <button
                      onClick={() => scrollToSection('#projects')}
                      className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold shadow-2xl shadow-slate-200 hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 lg:text-lg"
                    >
                      View Projects
                      <ChevronDown className="w-5 h-5" />
                    </button>

                    <button
                      onClick={() => scrollToSection('#contact')}
                      className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-slate-100 text-slate-900 rounded-2xl font-bold shadow-sm hover:border-violet-200 hover:bg-violet-50/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 lg:text-lg"
                    >
                      <Mail className="w-5 h-5 text-violet-600" />
                      Get in Touch
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 hidden lg:block"
        >
          <div className="w-6 h-10 border-2 border-slate-200 rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-violet-600 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
