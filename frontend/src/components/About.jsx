import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, Award, CheckCircle } from 'lucide-react';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-50/50 rounded-full blur-3xl -z-10 -mr-64 -mt-64"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-3xl -z-10 -ml-64 -mb-64"></div>

      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-slate-900 leading-tight">
                Solving complex problems with <span className="text-violet-600">elegant code</span> and robust infrastructure.
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                I'm a passionate Software Engineer and DevOps enthusiast with expertise in
                building scalable web applications using the MERN stack. My focus is on
                creating efficient, maintainable code and implementing robust DevOps practices
                to ensure seamless deployment and operations.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                With hands-on experience in containerization, CI/CD pipelines, and cloud
                infrastructure, I bring a holistic approach to software development that
                bridges development and operations.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100/50 hover:bg-violet-50 transition-colors group">
                <div className="p-3 bg-white rounded-xl shadow-sm group-hover:bg-white text-violet-600">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Career Goal</h4>
                  <p className="text-sm text-slate-500 font-medium">Lead Developer</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100/50 hover:bg-violet-50 transition-colors group">
                <div className="p-3 bg-white rounded-xl shadow-sm group-hover:bg-white text-violet-600">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Experience</h4>
                  <p className="text-sm text-slate-500 font-medium">Full Stack & DevOps</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-[2rem] border-white/40 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <GraduationCap className="w-24 h-24" />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-violet-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-violet-200">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">
                  Software Engineering
                </h3>
                <p className="text-violet-600 font-bold mb-4 flex items-center gap-2">
                  SLIIT University
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                  2022 - 2026
                </p>
                <div className="flex items-center gap-6">
                  <div className="bg-white p-3 rounded-xl border border-slate-100">
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">GPA</p>
                    <p className="text-lg font-black text-slate-900">3.11</p>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-100">
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Degree</p>
                    <p className="text-lg font-black text-slate-900">BSc (Hons)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-[2rem] text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-violet-600/20 to-transparent"></div>
              <h3 className="text-xl font-bold mb-6 relative z-10">
                Key Accomplishments
              </h3>
              <ul className="space-y-4 relative z-10">
                {[
                  "Deployed 10+ production-ready web apps",
                  "Automated CI/CD for 60% faster releases",
                  "Reduced query latency by 40% via indexing"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center border border-violet-500/30">
                      <CheckCircle className="w-4 h-4 text-violet-400" />
                    </div>
                    <span className="text-slate-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
