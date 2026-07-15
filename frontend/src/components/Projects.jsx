import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Code, Server, ArrowRight } from 'lucide-react';
import { getProjects } from '../utils/api';
import SpiralLoader from '@/components/ui/spiral-loader';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const defaultProjects = [
    {
      _id: '1',
      name: 'PowerWise',
      description: 'A sophisticated smart-grid management platform designed to optimize energy consumption across commercial and residential sectors. PowerWise provides real-time monitoring, predictive analytics for load balancing, and an automated demand-response system to reduce costs and improve grid stability.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
      githubUrl: 'https://github.com/kavishkasandaruwan2002/PowerWise',
      liveUrl: '#',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop',
      featured: true,
      category: 'FinTech'
    },
    {
      _id: '2',
      name: 'healthcare-microservices',
      description: 'A scalable, cloud-native healthcare platform built on a microservices architecture. This system manages patient records, appointment scheduling, and medical data using containerized services, ensuring high availability and seamless data flow between modules.',
      techStack: ['SpringBoot', 'MySQL', 'Docker', 'Microservices', 'MongoDB', 'RabbitMQ', 'Jwt'],
      githubUrl: 'https://github.com/kavishkasandaruwan2002/healthcare-microservices',
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
    },
    {
      _id: '4',
      name: 'ui/ux',
      description: 'UI/UX design for various web and mobile applications.',
      techStack: ['Figma', 'css'],
      githubUrl: 'https://www.figma.com/design/GPdxoLGp1IeMVxmJ2OGa9N/Untitled?node-id=0-1&p=f&t=eMuY5BvldNuGdWQa-0',
      liveUrl: '#',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80&auto=format&fit=crop',
      featured: true,
      category: 'UI/UX'
    },
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

  const categories = ['All', ...new Set(projects.map(p => p.category || 'Engineering'))];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => (p.category || 'Engineering') === selectedCategory);

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
        <SpiralLoader />
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

        {/* Dynamic Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`relative px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 border ${selectedCategory === category
                ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20 scale-105'
                : 'bg-background hover:bg-secondary text-muted-foreground hover:text-foreground border-border'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project._id || index}
                className="group bg-card rounded-[2.5rem] overflow-hidden border border-border hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 flex flex-col h-full"
              >
                {/* Project Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop'}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
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
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
