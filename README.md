# Video Event Logger

A simple React-based web app that allows users to log in, play videos, and automatically record user events (login, logout, and video plays) to a backend server.

---

## Features
- **User Login & Logout** with username input.
- **Three playable videos**.
- **Automatic event logging** for:
  - User login
  - User logout
  - Video play events
- **Backend event API integration**.

---

## Tech Stack
**Frontend:**
- React
- JavaScript (ES6+)
- CSS

**Backend (Required for event logging):**
- Node.js
- Express.js

---

## Project Structure
\`\`\`
project-root/
│
├── public/              # Static public files
├── src/
│   ├── pages/
│   │   ├── Login.jsx     # Login page component
│   │   ├── Content.jsx   # Main video page
│   │
│   ├── App.jsx           # Main application entry
│   ├── index.js          # ReactDOM entry point
│   ├── index.css         # Global CSS styling
│
├── server.js             # Example backend server for event logging
├── package.json
├── README.md
\`\`\`

---

## Installation & Setup

### 1️⃣ Clone the Repository
\`\`\`bash
git clone https://github.com/yourusername/video-event-logger.git
cd video-event-logger
\`\`\`

### 2️⃣ Install Dependencies
\`\`\`bash
npm install
\`\`\`

### 3️⃣ Run the Backend Server
Make sure you have Node.js installed.  
This will start the backend API for event logging.
\`\`\`bash
node server.js
\`\`\`
The backend will run on **http://localhost:5000**.

### 4️⃣ Run the Frontend
In another terminal:
\`\`\`bash
npm start
\`\`\`
The frontend will run on **http://localhost:3000**.

---

## API Endpoints
**POST** `/events`  
Logs an event to the backend.
\`\`\`json
{
  "username": "JohnDoe",
  "event_type": "video_play",
  "details": "{video_id:video1}",
  "timestamp": "2025-08-13T12:00:00.000Z"
}
\`\`\`

---

## Deployment
### **Frontend-only**
You can deploy the React build to:
- [Netlify](https://netlify.com)
- [Vercel](https://vercel.com)

### **Full-stack Deployment**
To keep event logging working online, deploy both frontend & backend:
- [Render](https://render.com)
- [Railway](https://railway.app)
- VPS (e.g., DigitalOcean, AWS EC2)

Build the React app before deployment:
\`\`\`bash
npm run build
\`\`\`
# Video Event Logger

A simple React-based web app that allows users to log in, play videos, and automatically record user events (login, logout, and video plays) to a backend server.

---

## Features
- **User Login & Logout** with username input.
- **Three playable videos**.
- **Automatic event logging** for:
  - User login
  - User logout
  - Video play events
- **Backend event API integration**.

---

## Tech Stack
**Frontend:**
- React
- JavaScript (ES6+)
- CSS

**Backend (Required for event logging):**
- Node.js
- Express.js

---

## Project Structure
\`\`\`
project-root/
│
├── public/              # Static public files
├── src/
│   ├── pages/
│   │   ├── Login.jsx     # Login page component
│   │   ├── Content.jsx   # Main video page
│   │
│   ├── App.jsx           # Main application entry
│   ├── index.js          # ReactDOM entry point
│   ├── index.css         # Global CSS styling
│
├── server.js             # Example backend server for event logging
├── package.json
├── README.md
\`\`\`

---

## Installation & Setup

### 1️⃣ Clone the Repository
\`\`\`bash
git clone https://github.com/yourusername/video-event-logger.git
cd video-event-logger
\`\`\`

### 2️⃣ Install Dependencies
\`\`\`bash
npm install
\`\`\`

### 3️⃣ Run the Backend Server
Make sure you have Node.js installed.  
This will start the backend API for event logging.
\`\`\`bash
node server.js
\`\`\`
The backend will run on **http://localhost:5000**.

### 4️⃣ Run the Frontend
In another terminal:
\`\`\`bash
npm start
\`\`\`
The frontend will run on **http://localhost:3000**.

---

## API Endpoints
**POST** `/events`  
Logs an event to the backend.
\`\`\`json
{
  "username": "JohnDoe",
  "event_type": "video_play",
  "details": "{video_id:video1}",
  "timestamp": "2025-08-13T12:00:00.000Z"
}
\`\`\`

---

## Deployment
### **Frontend-only**
You can deploy the React build to:
- [Netlify](https://netlify.com)
- [Vercel](https://vercel.com)

### **Full-stack Deployment**
To keep event logging working online, deploy both frontend & backend:
- [Render](https://render.com)
- [Railway](https://railway.app)
- VPS (e.g., DigitalOcean, AWS EC2)

Build the React app before deployment:
\`\`\`bash
npm run build
\`\`\`

---

## License
MIT License — feel free to use and modify.

---

## License
MIT License — feel free to use and modify.
