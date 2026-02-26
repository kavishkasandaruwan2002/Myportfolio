import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'JavaScript', level: 90 },
      ],
      icon: '🎨',
      color: 'from-violet-500 to-indigo-500'
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 85 },
        { name: 'REST APIs', level: 90 },
        { name: 'API Design', level: 80 },
      ],
      icon: '⚙️',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Database',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'Mongoose', level: 80 },
        { name: 'Database Design', level: 75 },
      ],
      icon: '💾',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'DevOps',
      skills: [
        { name: 'Docker', level: 80 },
        { name: 'GitHub Actions', level: 75 },
        { name: 'Nginx', level: 70 },
        { name: 'AWS (EC2)', level: 75 },
        { name: 'Linux', level: 85 },
      ],
      icon: '🚀',
      color: 'from-violet-600 to-purple-600'
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-foreground">
            <span className="gradient-text">My Arsenal</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed">
            I leverage modern technologies to build high-performance applications and resilient infrastructure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-card p-8 rounded-[2rem] shadow-xl shadow-primary/5 border border-border hover:scale-[1.02] transition-transform duration-500"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center text-3xl shadow-lg ring-4 ring-background`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-black text-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-bold text-muted-foreground">
                        {skill.name}
                      </span>
                      <span className="text-xs font-black text-violet-500 px-2 py-1 bg-violet-500/10 rounded-lg">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-3 overflow-hidden p-0.5 border border-border">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: index * 0.1, ease: "circOut" }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full shadow-[0_0_10px_rgba(0,0,0,0.1)]`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
