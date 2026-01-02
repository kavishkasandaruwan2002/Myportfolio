# Deployment Guide

This guide provides instructions for deploying the portfolio website to production.

## Frontend Deployment (Vercel/Netlify)

### Option 1: Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com) and sign in
3. Click "New Project" and import your repository
4. Set the root directory to `frontend`
5. Add environment variable:
   - `VITE_API_URL`: Your production backend API URL (e.g., `https://your-backend.herokuapp.com/api`)
6. Click "Deploy"

### Option 2: Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com) and sign in
3. Click "New site from Git" and select your repository
4. Set build settings:
   - Base directory: `frontend`
   - Build command: `npm run build`
   - Publish directory: `frontend/dist`
5. Add environment variable:
   - `VITE_API_URL`: Your production backend API URL
6. Click "Deploy site"

## Backend Deployment (Render/AWS/Railway)

### Option 1: Render

1. Push your code to GitHub
2. Go to [Render](https://render.com) and sign in
3. Click "New +" → "Web Service"
4. Connect your repository
5. Set build settings:
   - Root Directory: `backend`
   - Build Command: `npm install`
   - Start Command: `npm start`
6. Add environment variables:
   - `PORT`: 10000 (or leave empty for auto-assignment)
   - `MONGODB_URI`: Your MongoDB Atlas connection string
   - `NODE_ENV`: production
7. Click "Create Web Service"

### Option 2: AWS EC2

1. Launch an EC2 instance (Ubuntu recommended)
2. SSH into your instance
3. Install Node.js and MongoDB:
```bash
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install MongoDB (or use MongoDB Atlas)
sudo apt-get install -y mongodb
```

4. Clone your repository:
```bash
git clone your-repo-url
cd MYportfolio/backend
npm install
```

5. Create `.env` file with production variables
6. Use PM2 to run the application:
```bash
npm install -g pm2
pm2 start server.js --name portfolio-backend
pm2 save
pm2 startup
```

7. Configure Nginx as reverse proxy:
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

8. Install SSL with Let's Encrypt:
```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

### Option 3: Railway

1. Push your code to GitHub
2. Go to [Railway](https://railway.app) and sign in
3. Click "New Project" → "Deploy from GitHub"
4. Select your repository
5. Set root directory to `backend`
6. Add environment variables
7. Deploy

## MongoDB Setup (MongoDB Atlas)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create a database user
4. Whitelist your IP address (0.0.0.0/0 for all IPs - use with caution)
5. Get your connection string and update `MONGODB_URI` in your backend `.env`

## Environment Variables Summary

### Frontend (.env in frontend directory)
```
VITE_API_URL=https://your-backend-url.com/api
```

### Backend (.env in backend directory)
```
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
NODE_ENV=production
```

## Post-Deployment Checklist

- [ ] Test contact form submission
- [ ] Verify all API endpoints are working
- [ ] Check MongoDB connection
- [ ] Test responsive design on mobile devices
- [ ] Verify dark mode functionality
- [ ] Check console for errors
- [ ] Test all navigation links
- [ ] Verify social media links
- [ ] Update resume/CV download link
- [ ] Update contact information (email, phone)
- [ ] Update project links (GitHub, live demos)
- [ ] Test SEO meta tags
- [ ] Verify analytics (if implemented)

