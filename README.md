<div align="center">

 # 📦 Node.js Projects

###  A full set of backend practice tasks: REST API, MongoDB, authentication, file uploads, email verification.

<img src="https://img.shields.io/badge/runtime-Node.js-339933?logo=node.js&logoColor=white" />
<img src="https://img.shields.io/badge/framework-Express-black" />
<img src="https://img.shields.io/badge/database-MongoDB-47A248?logo=mongodb&logoColor=white" />
<img src="https://img.shields.io/badge/auth-JWT-orange" />
<img src="https://img.shields.io/badge/lang-JavaScript-F7DF1E?logo=javascript&logoColor=black" />

---

### 🔗 **Live Demo**

https://nodejs-hw-05-ru6h.onrender.com

</div>

---
## 📌 Overview

This repository contains a full series of Node.js backend homework projects completed step-by-step in separate branches and merged into `main`.

It demonstrates practical backend development skills including:

- working with **fs/promises**  
- creating a **REST API** using Express  
- connecting **MongoDB + Mongoose**  
- implementing **JWT authentication**  
- uploading & processing images  
- sending verification emails  
- validation (Joi)  
- pagination, filtering, route protection  

These tasks reflect real-world backend foundations for Node.js positions.

---

## 🗂️ Project Modules

### ✔ **01-express — Basic REST API (Express + File System)**
- Express server setup  
- CRUD operations using JSON storage  
- Controllers + services structure  
- Joi validation  
- Centralised error handling  
- Morgan logging  

---

### ✔ **02-mongodb — Contacts API with MongoDB & Mongoose**
- Migration from FS to MongoDB  
- Contact model + schema validation  
- CRUD with Mongoose  
- Pagination & favorite filtering  
- Improved HTTP error responses  

---

### ✔ **03-validation — Extended Validation Layer**
- Expanded Joi validation rules  
- Validation for update routes  
- Unified error format  
- Stricter request body validation  

---

### ✔ **04-auth — Authentication & User Management**
- User registration & login  
- Password hashing (bcrypt)  
- JWT token generation  
- Protected routes  
- User subscription updates  
- Current user endpoint  

---

### ✔ **05-mail-and-img — Email Verification & Avatar Uploads**
- Email verification token  
- Verification + re-send endpoints  
- Multer file upload  
- Image resizing (Jimp / Sharp)  
- Avatar URL update in user profile  

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **JWT + bcrypt**
- **Joi validation**
- **Multer**
- **Nodemailer**
- **dotenv**

---

## 🌐 API Endpoints Overview

### 🔐 Auth

| Method | Endpoint                     | Description                          |
|--------|------------------------------|--------------------------------------|
| POST   | `/auth/register`             | Register a new user                  |
| POST   | `/auth/login`                | Log in and create a user session     |
| POST   | `/auth/refresh`              | Refresh user session / tokens        |
| POST   | `/auth/logout`               | Log out and invalidate session       |
| POST   | `/auth/request-reset-email`  | Request password reset email         |
| POST   | `/auth/reset-password`       | Reset password using reset token     |

---

### 📝 Notes (authenticated)

All `/notes` endpoints require authentication (`authenticate` middleware).

| Method | Endpoint             | Description                    |
|--------|----------------------|--------------------------------|
| GET    | `/notes`             | Get all notes (with filters)   |
| GET    | `/notes/:noteId`     | Get a single note by ID        |
| POST   | `/notes`             | Create a new note              |
| PATCH  | `/notes/:noteId`     | Update an existing note        |
| DELETE | `/notes/:noteId`     | Delete a note by ID            |

---

### 🧑‍💼 User

| Method | Endpoint              | Description                                   |
|--------|-----------------------|-----------------------------------------------|
| PATCH  | `/users/me/avatar`    | Upload/update user avatar (auth + Multer)    |

---

<div align="center">

🚀 Built as part of a complete Node.js backend learning journey.

</div>
