const mongoose = require('mongoose');
require('dotenv').config();

const Project = require('../models/Project');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';

const projects = [
  {
    name: 'Point of Sale (POS) System',
    description: 'A comprehensive POS system with inventory management, sales tracking, and reporting features. Built with real-time updates and offline capability.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    githubUrl: 'https://github.com/username/pos-system',
    liveUrl: 'https://pos-demo.example.com',
    featured: true,
  },
  {
    name: 'E-Commerce CRUD Application',
    description: 'Full-featured e-commerce platform with product management, shopping cart, user authentication, and payment integration.',
    techStack: ['React', 'Express', 'MongoDB', 'JWT', 'Stripe API'],
    githubUrl: 'https://github.com/username/ecommerce-app',
    liveUrl: 'https://ecommerce-demo.example.com',
    featured: true,
  },
  {
    name: 'DevOps Deployment Pipeline',
    description: 'Automated CI/CD pipeline using GitHub Actions, Docker containerization, and AWS EC2 deployment with Nginx reverse proxy.',
    techStack: ['Docker', 'GitHub Actions', 'AWS EC2', 'Nginx', 'Node.js'],
    githubUrl: 'https://github.com/username/devops-pipeline',
    liveUrl: 'https://deployment-demo.example.com',
    featured: true,
  },
];

async function seedProjects() {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');

    // Clear existing projects
    await Project.deleteMany({});
    console.log('Cleared existing projects');

    // Insert new projects
    const insertedProjects = await Project.insertMany(projects);
    console.log(`Inserted ${insertedProjects.length} projects`);

    mongoose.connection.close();
    console.log('Database connection closed');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    mongoose.connection.close();
    process.exit(1);
  }
}

seedProjects();

