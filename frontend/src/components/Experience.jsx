import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Award, CheckCircle } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: 'internship',
      title: 'Software Engineering Intern',
      company: 'Tech Company Inc.',
      location: 'Remote',
      period: 'Jun 2024 - Aug 2024',
      description: [
        'Architected React-based modules for enterprise clients',
        'Optimized Node.js middleware for 30% faster API response times',
        'Spearheaded transition to Agile/Scrum development cycles',
        'Implemented advanced SQL indexing for query optimization',
      ],
    },
    {
      type: 'training',
      title: 'DevOps & Cloud Architecting',
      company: 'Advanced Certification',
      location: 'Online',
      period: 'Jan 2024 - Mar 2024',
      description: [
        'Mastered Kubernetes orchestration and Docker containerization',
        'Built automated IaC workflows using Terraform and Ansible',
        'Managed scalable AWS environments (EC2, VPC, RDS)',
        'Designed multi-stage CI/CD pipelines with GitHub Actions',
      ],
    },
    {
      type: 'self-learning',
      title: 'System Design & Scalability',
      company: 'Self-Directed Research',
      location: 'Online',
      period: '2023 - Present',
      description: [
        'In-depth study of distributed systems and microservices',
        'Built multiple production-grade MERN applications',
        'Actively contributing to various open-source initiatives',
        'Focused on performance profiling and observability metrics',
      ],
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

  const getIcon = (type) => {
    switch (type) {
      case 'internship':
        return <Briefcase className="w-6 h-6" />;
      case 'training':
        return <Award className="w-6 h-6" />;
      default:
        return <Briefcase className="w-6 h-6" />;
    }
  };

  return (
    <section id="experience" className="section-padding bg-slate-50/50 relative overflow-hidden">
      {/* Visual background element */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            <span className="gradient-text">Journey & Milestones</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line - hidden on mobile, centered on large */}
            <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 transform md:-translate-x-1/2"></div>

            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center border-4 border-slate-50 group">
                      <div className="text-violet-600 group-hover:scale-110 transition-transform">
                        {getIcon(exp.type)}
                      </div>
                    </div>
                  </div>

                  {/* Content card */}
                  <div className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                    <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 hover:scale-[1.02] transition-transform duration-500">
                      <div className="mb-6">
                        <span className="inline-block px-3 py-1 bg-violet-50 text-violet-700 text-xs font-black uppercase tracking-widest rounded-lg mb-4">
                          {exp.type}
                        </span>
                        <h3 className="text-2xl font-black text-slate-900 mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-lg font-bold text-slate-400">
                          {exp.company}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 mb-8 text-sm font-bold text-slate-500">
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-xl">
                          <Calendar className="w-4 h-4 text-violet-500" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-xl">
                          <MapPin className="w-4 h-4 text-violet-500" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <ul className="space-y-3">
                        {exp.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-violet-100 flex items-center justify-center shrink-0 mt-0.5">
                              <CheckCircle className="w-3 h-3 text-violet-600" />
                            </div>
                            <span className="text-slate-600 font-medium text-sm leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
