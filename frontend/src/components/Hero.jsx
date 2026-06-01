import React, { Suspense, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail, Github } from 'lucide-react';
import myImage from '@/lib/my.jpeg';
const AuroraCanvas = React.lazy(() => import('./ui/cosmic-aurora'));

const Hero = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    
    // Calculate tilt angles (max 10 degrees)
    const tiltX = (y / (box.height / 2)) * -10;
    const tiltY = (x / (box.width / 2)) * 10;
    
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };
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
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background"
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
                    <div className="w-full h-full rounded-[2.5rem] bg-card"></div>
                  </div>

                  {/* Glassmorphic Metric Badge 1 (top-left) */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="absolute -top-4 -left-6 z-30 flex items-center gap-2.5 px-4 py-2.5 bg-background/70 backdrop-blur-xl border border-violet-500/20 rounded-2xl shadow-xl animate-float pointer-events-none select-none"
                    style={{ animationDelay: '0s' }}
                  >
                    <span className="text-xl">💻</span>
                    <div>
                      <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest leading-none">Specialist</p>
                      <p className="text-xs font-black text-foreground mt-0.5">MERN Stack</p>
                    </div>
                  </motion.div>

                  {/* Glassmorphic Metric Badge 2 (middle-right) */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7, type: "spring" }}
                    className="absolute top-1/3 -right-6 z-30 flex items-center gap-2.5 px-4 py-2.5 bg-background/70 backdrop-blur-xl border border-indigo-500/20 rounded-2xl shadow-xl animate-float pointer-events-none select-none"
                    style={{ animationDelay: '2s' }}
                  >
                    <span className="text-xl">🚀</span>
                    <div>
                      <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest leading-none">DevOps</p>
                      <p className="text-xs font-black text-foreground mt-0.5">AWS & CI/CD</p>
                    </div>
                  </motion.div>

                  {/* Glassmorphic Metric Badge 3 (bottom-left) */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9, type: "spring" }}
                    className="absolute -bottom-4 -left-4 z-30 flex items-center gap-2.5 px-4 py-2.5 bg-background/70 backdrop-blur-xl border border-fuchsia-500/20 rounded-2xl shadow-xl animate-float pointer-events-none select-none"
                    style={{ animationDelay: '4s' }}
                  >
                    <span className="text-xl">🎓</span>
                    <div>
                      <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest leading-none">SLIIT</p>
                      <p className="text-xs font-black text-foreground mt-0.5">BSc (Hons)</p>
                    </div>
                  </motion.div>

                  {/* Photo container with 3D perspective tilt effect */}
                  <motion.div
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    animate={{
                      rotateX: tilt.x,
                      rotateY: tilt.y,
                      transformPerspective: 1000
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="relative z-10 p-3 cursor-pointer"
                  >
                    <img
                      src={myImage}
                      alt="Kavishka"
                      className="w-56 h-56 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-[2.25rem] object-cover shadow-2xl relative z-10 transition-all duration-300 border-4 border-card"
                      style={{
                        boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.25)',
                        transform: "translateZ(30px)"
                      }}
                    />
                  </motion.div>

                  {/* Enhanced floating element */}
                  <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-card rounded-2xl shadow-2xl flex items-center justify-center animate-float z-20 border border-border">
                    <Github className="w-8 h-8 text-foreground" />
                  </div>
                </div>

                <div className="text-center md:text-left">
                  <motion.div variants={itemVariants} className="mb-6">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 text-violet-500 text-sm font-bold border border-violet-500/20 shadow-sm">
                      <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
                      </span>
                      Available for Projects
                    </span>
                  </motion.div>

                  <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-foreground" data-scroll-speed="0.08">
                    Crafting <span className="gradient-text">Digital</span> <br />
                    Experiences.
                  </motion.h1>

                  <motion.p variants={itemVariants} className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed font-medium" data-scroll-speed="0.05">
                    I'm <span className="text-foreground font-bold underline decoration-violet-500 decoration-4 underline-offset-4">Kavishka</span>, a System Architect building production-grade web applications and resilient DevOps pipelines.
                  </motion.p>

                  <motion.div variants={itemVariants} className="mt-10 flex flex-wrap justify-center md:justify-start gap-5">
                    <button
                      onClick={() => scrollToSection('#projects')}
                      className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-bold shadow-2xl shadow-primary/20 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 lg:text-lg"
                    >
                      View Projects
                      <ChevronDown className="w-5 h-5" />
                    </button>

                    <a
                      href="/Kavishka_Resume.pdf"
                      download="Kavishka_Sandaruwan_CV.pdf"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-violet-500/10 border-2 border-violet-500/20 text-violet-600 dark:text-violet-400 rounded-2xl font-bold shadow-sm hover:bg-violet-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 lg:text-lg cursor-pointer"
                    >
                      <Download className="w-5 h-5" />
                      Download CV
                    </a>

                    <button
                      onClick={() => scrollToSection('#contact')}
                      className="inline-flex items-center gap-2 px-8 py-4 bg-background border-2 border-border text-foreground rounded-2xl font-bold shadow-sm hover:border-violet-200 hover:bg-accent hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 lg:text-lg"
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
          <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center p-1">
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
