# 🚗 ParkEase Backend

ParkEase is a smart parking management system designed to automate and streamline the process of parking entry, exit, payments, and barrier control. This repository contains the backend API for the ParkEase system, built with **Node.js**, **Express**, and **PostgreSQL**, and integrated with **M-Pesa Daraja API** for seamless mobile payments.

---

## 📖 Project Description

The ParkEase system provides an efficient solution for managing parking lots by:
- Tracking vehicle entries and exits in real time.
- Allowing cashless payments via M-Pesa STK Push.
- Controlling entry/exit barriers programmatically.
- Providing APIs for mobile and web clients to interact with the system.

---

## ✅ Achievements So Far

- 🌐 **Backend API**: RESTful API built with Node.js and Express.
- 🗄️ **Database Integration**: PostgreSQL database connected using Sequelize.
- 💳 **M-Pesa Integration**:
  - Successfully connected to the Safaricom Daraja API sandbox.
  - Obtaining OAuth access tokens.
  - Constructing and sending STK Push requests.
  - Receiving and logging M-Pesa payment callbacks.
- 🚦 **Barrier Control Endpoints**: API routes for programmatically opening and closing barriers.
- 📦 **Modular Codebase**: Clean separation of routes, services, and configuration.

---

## 🚀 Features

- Vehicle entry and exit tracking.
- Cashless mobile payments via M-Pesa.
- Real-time barrier control.
- REST API ready for integration with mobile/web frontends.

---

## 🔧 Setup Instructions

###  Clone the repository
```bash
git clone https://github.com/<your-username>/parkease-backend.git
cd parkease-backend
```

###  Install dependencies
```bash
npm install
```

###  Create a .env file
```bash
cp .env.example .env
```

```
PORT=5000
DATABASE_URL=postgresql://<db-user>:<db-password>@localhost:5432/parkease?schema=public

# M-Pesa sandbox credentials
MPESA_CONSUMER_KEY=<your_consumer_key>
MPESA_CONSUMER_SECRET=<your_consumer_secret>
MPESA_SHORTCODE=174379
MPESA_PASSKEY=bfb279f9aa9bdbcf15e97dd71a467cd2
MPESA_CALLBACK_URL=https://<your-ngrok-subdomain>.ngrok-free.app/api/payment/callback
```
###  Start the server
```bash
npm run dev
```