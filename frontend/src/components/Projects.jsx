import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Server, ArrowRight } from 'lucide-react';
import { getProjects } from '../utils/api';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const defaultProjects = [
    {
      _id: '1',
      name: 'System Architect POS',
      description: 'High-performance commerce engine with inventory automation and real-time analytics.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
      githubUrl: 'https://github.com/kavishkasandaruwan2002/Car-Workshop-System',
      liveUrl: '#',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop',
      featured: true,
      category: 'FinTech'
    },
    {
      _id: '2',
      name: 'CloudScale E-Commerce',
      description: 'Enterprise-grade marketplace featuring distributed architecture and seamless payment flows.',
      techStack: ['Next.js', 'Go', 'Docker', 'AWS'],
      githubUrl: 'https://github.com/kavishkasandaruwan2002',
      liveUrl: '#',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80&auto=format&fit=crop',
      featured: true,
      category: 'E-Commerce'
    },
    {
      _id: '3',
      name: 'Pipeline',
      description: 'Zero-downtime CI/CD infrastructure with automated security audits and Canary deployments.',
      techStack: ['GitHub Actions', 'EC2', 'CI/CD'],
      githubUrl: 'https://github.com/kavishkasandaruwan2002/PIPELINE-1',
      liveUrl: '#',
      image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80&auto=format&fit=crop',
      featured: true,
      category: 'DevOps'
    }
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await getProjects();
        if (response.success && response.data.length > 0) {
          setProjects(response.data);
        } else {
          setProjects(defaultProjects);
        }
      } catch (error) {
        setProjects(defaultProjects);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  if (loading) {
    return (
      <section id="projects" className="section-padding flex items-center justify-center min-h-[400px]">
        <div className="w-12 h-12 border-4 border-violet-100 border-t-violet-600 rounded-full animate-spin"></div>
      </section>
    );
  }

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-foreground">
            <span className="gradient-text">Selected Works</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Engineering high-impact solutions across web, cloud, and mobile ecosystems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project._id || index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
              className="group bg-card rounded-[2.5rem] overflow-hidden border border-border hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop'}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 bg-card/95 backdrop-blur-md text-xs font-black text-foreground rounded-full shadow-lg uppercase tracking-widest border border-border">
                    {project.category || 'Engineering'}
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-black text-foreground mb-4 group-hover:text-violet-600 transition-colors">
                  {project.name}
                </h3>
                <p className="text-muted-foreground font-medium mb-8 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-secondary text-muted-foreground rounded-lg text-xs font-bold border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-border">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-all shadow-lg shadow-primary/20"
                      title="View Code"
                    >
                      <Github className="w-5 h-5" />
                    </a>

                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-2 text-violet-600 font-black hover:gap-3 transition-all"
                    >
                      Case Study
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
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
