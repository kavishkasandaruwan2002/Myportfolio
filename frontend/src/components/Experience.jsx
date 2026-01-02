import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: 'internship',
      title: 'Software Engineering Intern',
      company: 'Tech Company Inc.',
      location: 'Remote',
      period: 'Jun 2024 - Aug 2024',
      description: [
        'Developed and maintained React-based web applications for client projects',
        'Collaborated with senior developers to implement RESTful APIs using Node.js and Express',
        'Participated in code reviews and agile development practices',
        'Improved application performance by optimizing database queries',
      ],
    },
    {
      type: 'training',
      title: 'DevOps Training Program',
      company: 'Online Platform',
      location: 'Online',
      period: 'Jan 2024 - Mar 2024',
      description: [
        'Completed comprehensive DevOps training covering Docker, Kubernetes, and CI/CD',
        'Hands-on experience with AWS services (EC2, S3, CloudWatch)',
        'Built automated deployment pipelines using GitHub Actions',
        'Implemented infrastructure as code practices',
      ],
    },
    {
      type: 'self-learning',
      title: 'Full Stack Development',
      company: 'Self-Learning',
      location: 'Online',
      period: '2023 - Present',
      description: [
        'Self-taught MERN stack development through online courses and projects',
        'Built multiple full-stack applications and deployed them to production',
        'Contributed to open-source projects on GitHub',
        'Continuously learning new technologies and best practices',
      ],
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const getIcon = (type) => {
    switch (type) {
      case 'internship':
        return <Briefcase className="w-5 h-5" />;
      case 'training':
        return <Award className="w-5 h-5" />;
      default:
        return <Briefcase className="w-5 h-5" />;
    }
  };

  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-dark-50 to-white dark:from-dark-800 dark:to-dark-900">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Experience & Training</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto rounded mb-4"></div>
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            My professional journey and continuous learning path
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-primary-700 transform md:-translate-x-1/2"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-dark-900"></div>
                  </div>

                  {/* Content card */}
                  <div
                    className={`ml-16 md:ml-0 md:w-5/12 ${
                      index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                  >
                    <div className="glass p-6 rounded-xl hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400">
                          {getIcon(exp.type)}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-primary-600 dark:text-primary-400 font-semibold mb-2">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-dark-600 dark:text-dark-300">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {exp.description.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-start gap-2 text-dark-600 dark:text-dark-300"
                          >
                            <span className="text-primary-600 dark:text-primary-400 mt-1">▸</span>
                            <span>{item}</span>
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

