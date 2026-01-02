import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Server } from 'lucide-react';
import { getProjects } from '../utils/api';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await getProjects();
        if (response.success && response.data.length > 0) {
          setProjects(response.data);
        } else {
          // Fallback to default projects if API fails or returns empty
          setProjects(defaultProjects);
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
        // Fallback to default projects
        setProjects(defaultProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const defaultProjects = [
    {
      _id: '1',
      name: 'Point of Sale (POS) System',
      description: 'A comprehensive POS system with inventory management, sales tracking, and reporting features. Built with real-time updates and offline capability.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
      githubUrl: 'https://github.com/username/pos-system',
      liveUrl: 'https://pos-demo.example.com',
      featured: true,
    },
    {
      _id: '2',
      name: 'E-Commerce CRUD Application',
      description: 'Full-featured e-commerce platform with product management, shopping cart, user authentication, and payment integration.',
      techStack: ['React', 'Express', 'MongoDB', 'JWT', 'Stripe API'],
      githubUrl: 'https://github.com/username/ecommerce-app',
      liveUrl: 'https://ecommerce-demo.example.com',
      featured: true,
    },
    {
      _id: '3',
      name: 'DevOps Deployment Pipeline',
      description: 'Automated CI/CD pipeline using GitHub Actions, Docker containerization, and AWS EC2 deployment with Nginx reverse proxy.',
      techStack: ['Docker', 'GitHub Actions', 'AWS EC2', 'Nginx', 'Node.js'],
      githubUrl: 'https://github.com/username/devops-pipeline',
      liveUrl: 'https://deployment-demo.example.com',
      featured: true,
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

  const projectVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  if (loading) {
    return (
      <section id="projects" className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="section-padding bg-white dark:bg-dark-900">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto rounded mb-4"></div>
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            Real-world applications showcasing my skills and expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project._id || index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={projectVariants}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-dark-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.name}
                  </h3>
                  {project.featured && (
                    <span className="px-2 py-1 text-xs font-semibold bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded">
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-dark-600 dark:text-dark-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 glass hover:bg-dark-100 dark:hover:bg-dark-800 rounded-lg transition-colors text-sm font-medium text-dark-900 dark:text-white"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

