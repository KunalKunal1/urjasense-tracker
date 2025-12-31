# UrjaSense - Smart Energy Usage Tracker

A complete **Monorepo** system with Java/Spring Boot backend and React PWA frontend for tracking electricity usage and calculating bills with India-centric slab-based pricing.

## 📁 Project Structure

```
urjasense-tracker/
├── backend/           # Java Spring Boot REST API
│   ├── src/
│   ├── pom.xml       # Maven dependencies
│   └── ...
├── frontend/          # React + Vite PWA
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
├── README.md
└── .gitignore
```

## ⚡ Features

- **Slab-Based Billing**: Maharashtra domestic tariff (₹3.44, ₹7.34, ₹10.36 per unit)
- **Multi-State Support**: Extensible for Karnataka, Tamil Nadu, Andhra Pradesh, etc.
- **Progressive Web App**: Install on mobile like a native app
- **REST API**: Spring Boot backend with MongoDB integration
- **Time-Series Data**: Store power consumption logs with timestamps
- **Responsive UI**: Works on desktop and mobile

## 🚀 Quick Start

### Backend Setup
1. cd backend
2. mvn clean install
3. Configure MongoDB in src/main/resources/application.properties
4. mvn spring-boot:run

### Frontend Setup
1. cd frontend
2. npm install
3. npm run dev

## 🔌 API Endpoints

### Calculate Bill
POST /api/billing/calculate
Request: { "units": 250, "state": "MH" }
Response: { "units": 250, "state": "MH", "amount": 1831.0, "currency": "INR" }

### Health Check
GET /api/billing/health

## 📱 PWA Installation

1. Open http://localhost:5173 in Chrome/Safari
2. Look for "Add to Home Screen" prompt
3. Install like a native app

## 🌐 Deployment

### Backend (Render.com)
1. Push code to GitHub
2. Connect repository to Render
3. Set environment variable: SPRING_DATA_MONGODB_URI
4. Deploy

### Frontend (Vercel)
1. Push code to GitHub
2. Connect frontend folder to Vercel
3. Deploy

---
**Made with ❤️ for India's energy consumers**
