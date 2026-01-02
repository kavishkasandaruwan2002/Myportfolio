# Professional Developer Portfolio - MERN Stack

A modern, professional, and responsive developer portfolio website built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and Tailwind CSS.

## Features

- ✨ Modern, clean UI with glassmorphism effects and gradients
- 🌙 Dark mode support
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⚡ Smooth animations with Framer Motion
- 🔧 MERN stack architecture
- 📧 Contact form with MongoDB integration
- 🚀 Production-ready code

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Framer Motion
- React Router
- Axios

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- CORS
- Dotenv

## Project Structure

```
MYportfolio/
├── frontend/          # React frontend application
├── backend/           # Express backend API
├── .env.example       # Environment variables template
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
NODE_ENV=development
```

4. (Optional) Seed the database with sample projects:
```bash
npm run seed
```

5. Start the backend server:
```bash
npm run dev
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the frontend directory (optional):
```
VITE_API_URL=http://localhost:5000/api
```

4. Start the frontend development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:3000`

## Deployment

### Frontend Deployment (Vercel/Netlify)
- Build the React app: `npm run build`
- Deploy the `dist` folder to your hosting platform

### Backend Deployment (Render/AWS)
- Set environment variables on your hosting platform
- Ensure MongoDB connection (use MongoDB Atlas for cloud hosting)
- Deploy the backend server

### Environment Variables for Production
- Update `VITE_API_URL` in frontend to point to your production backend URL
- Set `MONGODB_URI` to your production MongoDB connection string

## License

MIT License

