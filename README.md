# ❤️ Heart Rate Monitoring System

A full-stack project that monitors heart rate data using hardware sensors and displays it on a web interface.

This project integrates **hardware + backend + frontend** to collect, store, and visualize heart rate readings.

---

## 📁 Project Structure

heart-rate-monitoring/
│
├── frontend/        # HTML, CSS, JavaScript (UI)
├── backend/         # Node.js + Express API
├── mongodb-data/    # MongoDB local data
├── image/           # Images / assets
└── README.md

---

## 🛠 Tech Stack

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### Hardware
- node mcu esp8266
- Heart Rate Sensor
- Arduino IDE

---

## ⚙️ How It Works

1. The heart rate sensor collects pulse data.
2. Arduino reads sensor values using Arduino IDE.
3. Backend (Node.js + Express) receives the data.
4. MongoDB stores heart rate readings.
5. Frontend fetches data and displays heart rate values.

---

## ▶️ How to Run the Project

### 1️⃣ Clone the Repository
git clone https://github.com/SHRIDHISUMAN/heart-rate-monitoring.git

### 2️⃣ Start MongoDB
mongod --dbpath mongodb-data

### 3️⃣ Run Backend
cd backend  
npm install  
npm start

### 4️⃣ Run Frontend
Open `index.html` from the `frontend` folder  
(or use Live Server)

---

## 📌 Requirements
- Node.js
- MongoDB
- Arduino IDE
- Heart Rate Sensor hardware

---

## 📄 Note
This project is developed for academic and learning purposes.

---

## 👩‍💻 Author
Shridhi Suman
