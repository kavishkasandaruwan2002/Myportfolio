import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: Linkedin,
    },
    {
      name: 'Email',
      url: 'mailto:contact@example.com',
      icon: Mail,
    },
  ];

  return (
    <footer className="bg-dark-900 dark:bg-dark-950 text-dark-300 py-12 border-t border-dark-800">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Portfolio</h3>
            <p className="text-dark-400 text-sm leading-relaxed">
              Software Engineer & DevOps Enthusiast passionate about building scalable
              applications and automating infrastructure.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-dark-400 hover:text-primary-400 transition-colors text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-dark-400 hover:text-primary-400 transition-colors text-sm"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-dark-400 hover:text-primary-400 transition-colors text-sm"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-dark-400 hover:text-primary-400 transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target={social.name !== 'Email' ? '_blank' : '_self'}
                  rel={social.name !== 'Email' ? 'noopener noreferrer' : ''}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-dark-800 hover:bg-dark-700 rounded-lg transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-dark-300 hover:text-primary-400" />
                </motion.a>
              ))}
            </div>
            <div className="mt-4">
              <a
                href="mailto:contact@example.com"
                className="text-dark-400 hover:text-primary-400 transition-colors text-sm"
              >
                contact@example.com
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-dark-800 pt-8 text-center">
          <p className="text-dark-400 text-sm flex items-center justify-center gap-2">
            © {currentYear} All rights reserved. Made with
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            using React & Node.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

