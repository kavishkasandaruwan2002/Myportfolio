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
    }).catch(() => {});

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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary-50 via-background to-primary-50 dark:from-background dark:via-background dark:to-muted/20"
    >
      {/* Background aurora canvas handles visual effect */}

      <div className="container-custom section-padding relative z-10 background-coverage background-cover">
        <Suspense fallback={null}>
          <AuroraCanvas />
        </Suspense>

        <div className="mx-auto max-w-5xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <div className="main">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0 relative group">
                  {/* Animated gradient border */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 dark:from-primary-500 dark:via-primary-400 dark:to-primary-500 opacity-75 blur-xl group-hover:opacity-100 transition-opacity duration-500 gradient-rotate"></div>
                  
                  {/* Outer glow ring */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary-400/50 via-primary-500/50 to-primary-600/50 dark:from-primary-500/50 dark:via-primary-400/50 dark:to-primary-500/50 p-1">
                    <div className="w-full h-full rounded-3xl bg-gradient-to-br from-primary-200/30 to-primary-600/30 dark:from-primary-800/30 dark:to-primary-400/30"></div>
                  </div>
                  
                  {/* Photo container with enhanced styling */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative z-10"
                  >
                    <img
                      data-scroll-speed="0.14"
                      src={myImage}
                      alt="Kavishka"
                      className="w-48 h-48 md:w-72 md:h-72 rounded-3xl object-cover ring-4 ring-primary-200/50 dark:ring-primary-800/50 shadow-2xl dark:shadow-primary-900/50 relative z-10 transition-all duration-300 group-hover:ring-primary-300 dark:group-hover:ring-primary-700"
                      style={{
                        filter: 'brightness(1.05) contrast(1.1) saturate(1.1)',
                        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), 0 0 40px rgba(59, 130, 246, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.1)'
                      }}
                    />
                  </motion.div>
                  
                  {/* Animated particles effect */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-400 rounded-full opacity-60 animate-ping" style={{ animationDelay: '0s', animationDuration: '2s' }}></div>
                    <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-primary-500 rounded-full opacity-60 animate-ping" style={{ animationDelay: '1s', animationDuration: '2.5s' }}></div>
                    <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-primary-600 rounded-full opacity-60 animate-ping" style={{ animationDelay: '0.5s', animationDuration: '3s' }}></div>
                  </div>
                </div>

                <div className="text-center md:text-left">
                  <motion.div variants={itemVariants} className="mb-3">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium">
                       Software Engineer • Full-Stack • DevOps
                    </span>
                  </motion.div>

                  <motion.h1 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight" data-scroll-speed="0.08">
                    Hi, I'm <span className="gradient-text">Kavishka Sandaruwan</span> — I build high-performance web platforms
                  </motion.h1>

                  <motion.p variants={itemVariants} className="mt-3 text-base md:text-lg text-muted-foreground max-w-2xl" data-scroll-speed="0.05">
                    I design and ship production-grade web applications and resilient DevOps pipelines. I prioritize performance,
                    reliability, and developer experience to turn product ideas into scalable, maintainable systems.
                  </motion.p>

                  <motion.div variants={itemVariants} className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium">Scalable Systems</span>
                    <span className="inline-block px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium">CI/CD &amp; Automation</span>
                    <span className="inline-block px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium">Observability &amp; Reliability</span>
                  </motion.div>

                  <motion.div variants={itemVariants} className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
                    <button
                      onClick={() => scrollToSection('#projects')}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-lg font-semibold shadow-lg hover:translate-y-[-2px] transition-transform"
                      aria-label="See my work"
                    >
                      See My Work
                    </button>

                    <a
                      href="/resume.pdf"
                      download
                      className="inline-flex items-center gap-2 px-5 py-3 border border-border rounded-lg text-sm font-medium hover:bg-accent/5"
                      aria-label="Download resume"
                    >
                      <Download className="w-4 h-4" />
                      Résumé
                    </a>

                    <button
                      onClick={() => scrollToSection('#contact')}
                      className="inline-flex items-center gap-2 px-5 py-3 glass rounded-lg text-sm font-medium"
                      aria-label="Contact me"
                    >
                      <Mail className="w-4 h-4" />
                      Let's Talk
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator (clickable) */}
        <motion.button
          onClick={() => scrollToSection('#projects')}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, repeat: Infinity, repeatType: 'reverse', duration: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-background/40 glass p-2 rounded-full"
          aria-label="Scroll to projects"
        >
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
