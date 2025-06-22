# Car Dealership

A full-stack automotive dealership web application that allows users to browse, list, and inquire about cars. Built with the MERN stack (MongoDB, Express, React, Node.js), it provides a responsive UI and robust backend features.

---

## About the Project

This car dealership project enables users to:

- Explore vehicles by brand, category, or features.
- Post a listing for a vehicle they wish to sell.
- Make inquiries on vehicles they're interested in.
- Authenticate users via signup/login and jwt authentication functionality.

The application includes both frontend and backend in a single repository and integrates a MongoDB database via Docker.

---

## Features

- 🔍 **Search and filter vehicles**
- 🧾 **User authentication (JWT-based)**
- 🚘 **List and manage cars**
- 📥 **Make and view inquiries**
- 🖼️ **Upload vehicle images (via external image links)**
- 📱 **Fully responsive UI (mobile-first)**

---

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) 
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)
- [Docker](https://docs.docker.com/)

---

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/shreyanshsharma88/car-dealership.git
cd car-dealership
```
I've not dockerised the entire backend yet, so we'll have to manually setup the db
 
2. **Once you have docker installed, run the following command to setup a mongodb database**
```bash
docker run --name mongo-car-dealership \
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=password \
  -p 27017:27017 \
  -d mongo:8.0.10
```
3. **Once successfully db is created, cd into backend repo and install packages and run the server on localhost:8080, you can also seed dummy data**
```bash
cd backend
npm i
npm run seed
npm run dev
```

4. **Once the backend is up and running, go back a directory, cd to frontend, install packages and run the server on localhost:5173**
```bash
cd ..
cd frontend
npm i
npm run dev
```

