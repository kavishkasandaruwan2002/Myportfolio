import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, Award } from 'lucide-react';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto rounded"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Software Engineer and DevOps enthusiast with expertise in
              building scalable web applications using the MERN stack. My focus is on
              creating efficient, maintainable code and implementing robust DevOps practices
              to ensure seamless deployment and operations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With hands-on experience in containerization, CI/CD pipelines, and cloud
              infrastructure, I bring a holistic approach to software development that
              bridges development and operations.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 glass rounded-lg">
                <User className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                <span className="text-sm font-medium text-foreground">
                  Full Stack Developer
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 glass rounded-lg">
                <Award className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                <span className="text-sm font-medium text-foreground">
                  DevOps Practitioner
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <div className="glass p-6 rounded-xl">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    Bachelor of Science in Software Engineering
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                 Sri Lanka Institute of Information Technology(SLIIT)
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Undergraduate: 2022 - 2026
                  </p>
                  <p className="text-muted-foreground text-sm">
                    GPA: 3.11
                  </p>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-lg font-bold text-foreground mb-4">
                Key Achievements
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 dark:text-primary-400 mt-1">▸</span>
                  <span>Developed and deployed production-ready web applications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 dark:text-primary-400 mt-1">▸</span>
                  <span>Implemented CI/CD pipelines reducing deployment time by 60%</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 dark:text-primary-400 mt-1">▸</span>
                  <span>Optimized database queries improving application performance by 40%</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

