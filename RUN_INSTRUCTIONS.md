# How to Run This Project 🚀

## Quick Start (Step-by-Step)

### Prerequisites
- ✅ Node.js installed (check: `node -v`)
- ✅ MongoDB running (local or MongoDB Atlas)

---

## Step 1: Backend Setup

### 1.1 Navigate to backend folder
```bash
cd backend
```

### 1.2 Install dependencies (if not already installed)
```bash
npm install
```

### 1.3 Create `.env` file
Create a file named `.env` in the `backend` folder with this content:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
NODE_ENV=development
```

**For MongoDB Atlas (Cloud):**
```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
NODE_ENV=development
```

### 1.4 (Optional) Seed database with sample projects
```bash
npm run seed
```

### 1.5 Start the backend server
```bash
npm run dev
```

✅ Backend should now be running on `http://localhost:5000`

---

## Step 2: Frontend Setup

**Open a NEW terminal window/tab** (keep backend running)

### 2.1 Navigate to frontend folder
```bash
cd frontend
```

### 2.2 Install dependencies (if not already installed)
```bash
npm install
```

### 2.3 (Optional) Create `.env` file
Create a file named `.env` in the `frontend` folder:

```env
VITE_API_URL=http://localhost:5000/api
```

*Note: This is optional - the default is already set to this value*

### 2.4 Start the frontend development server
```bash
npm run dev
```

✅ Frontend should now open automatically at `http://localhost:3000`

---

## You're Done! 🎉

- **Backend**: Running on `http://localhost:5000`
- **Frontend**: Running on `http://localhost:3000`

Open your browser and visit `http://localhost:3000` to see your portfolio!

---

## Troubleshooting

### ❌ "MongoDB connection error"
- Make sure MongoDB is running (if using local MongoDB)
- Check your `.env` file has the correct `MONGODB_URI`
- For MongoDB Atlas: Make sure your IP is whitelisted

### ❌ "Port 5000 already in use"
- Another application is using port 5000
- Either stop that application or change the PORT in backend `.env`

### ❌ "Port 3000 already in use"
- Vite will automatically try the next available port (3001, 3002, etc.)
- Check the terminal for the actual port number

### ❌ "Cannot find module" errors
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again

### ❌ Frontend can't connect to backend
- Make sure backend is running
- Check that backend is on port 5000
- Verify `VITE_API_URL` in frontend `.env` (if you created one)

---

## Commands Summary

### Backend
```bash
cd backend
npm install          # Install dependencies
npm run dev         # Start development server
npm run seed        # Seed database (optional)
npm start           # Start production server
```

### Frontend
```bash
cd frontend
npm install          # Install dependencies
npm run dev         # Start development server
npm run build       # Build for production
npm run preview     # Preview production build
```

---

## Need MongoDB Atlas? (Free Cloud Database)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up for free
3. Create a cluster (free tier)
4. Create a database user
5. Whitelist IP address (0.0.0.0/0 for all IPs)
6. Get connection string
7. Use it in backend `.env` file

---

Happy coding! 🚀

