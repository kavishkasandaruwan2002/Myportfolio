# Quick Start Guide

Get your portfolio up and running in minutes!

## Prerequisites Check

Make sure you have installed:
- ✅ Node.js (v16+) - Check with `node -v`
- ✅ npm or yarn - Check with `npm -v`
- ✅ MongoDB (local installation OR MongoDB Atlas account)

## 5-Minute Setup

### Step 1: Backend Setup (2 minutes)

```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Create .env file (copy from .env.example)
# Windows (PowerShell):
Copy-Item .env.example .env
# Linux/Mac:
cp .env.example .env

# Edit .env and set your MongoDB URI
# For local MongoDB: mongodb://localhost:27017/portfolio
# For MongoDB Atlas: mongodb+srv://user:pass@cluster.mongodb.net/portfolio

# (Optional) Seed sample projects
npm run seed

# Start backend server
npm run dev
```

Backend should now be running on `http://localhost:5000` ✅

### Step 2: Frontend Setup (2 minutes)

Open a NEW terminal window:

```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# (Optional) Create .env file for custom API URL
# Default: http://localhost:5000/api

# (Optional) Create .env file for custom API URL
# Create .env file and add: VITE_API_URL=http://localhost:5000/api
# Default: http://localhost:5000/api

# Start frontend development server
npm run dev
```

Frontend should now open at `http://localhost:3000` ✅

## What's Next?

1. **Customize Your Information**
   - Update `frontend/src/components/Hero.js` - Change name, headline, intro
   - Update `frontend/src/components/About.js` - Add your education and achievements
   - Update `frontend/src/components/Experience.js` - Add your experience
   - Update `frontend/src/components/Contact.js` - Add your contact info
   - Update `frontend/src/components/Footer.js` - Add social links

2. **Add Your Projects**
   - Use the seed script to add sample projects, or
   - Manually add projects via MongoDB or API

3. **Add Your Resume/CV**
   - Place your PDF resume in `frontend/public/resume.pdf`
   - Or update the download link in Hero component

4. **Deploy**
   - See `DEPLOYMENT.md` for detailed deployment instructions
   - Frontend: Deploy to Vercel/Netlify
   - Backend: Deploy to Render/AWS/Railway
   - Database: Use MongoDB Atlas for cloud hosting

## Troubleshooting

### Backend won't start
- Check if MongoDB is running (if using local MongoDB)
- Verify `.env` file exists and has correct `MONGODB_URI`
- Check if port 5000 is available

### Frontend won't connect to backend
- Make sure backend is running on port 5000
- Check browser console for CORS errors
- Verify `VITE_API_URL` in frontend `.env` (if set)

### Contact form not working
- Verify backend is running
- Check MongoDB connection
- Check browser console and backend logs for errors

## Need Help?

- Check the main `README.md` for detailed documentation
- Review `DEPLOYMENT.md` for production deployment
- Check component files for customization options

Happy coding! 🚀

