<div align="center">

 # 📦 Node.js Projects

###  A full set of backend practice tasks: CLI tools, REST API, MongoDB, authentication, file uploads, email verification.

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

- CLI applications  
- working with **fs/promises**  
- creating a **REST API** using Express  
- connecting **MongoDB + Mongoose**  
- implementing **JWT authentication**  
- uploading & processing images  
- sending verification emails  
- validation (Joi)  
- pagination, filtering, route protection  

These tasks reflect real-world backend foundations for junior Node.js positions.

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
- **Nodemailer / SendGrid**
- **Jimp**
- **Morgan**
- **dotenv**

---

## 🌐 API Endpoints Overview

| Method | Endpoint | Description |
|--------|----------|-------------|
| **GET** | `/api/contacts` | Get all contacts (supports `page`, `limit`, `favorite`) |
| **GET** | `/api/contacts/:id` | Get contact by ID |
| **POST** | `/api/contacts` | Create new contact (Joi validation) |
| **PUT** | `/api/contacts/:id` | Replace entire contact |
| **PATCH** | `/api/contacts/:id` | Partially update contact |
| **PATCH** | `/api/contacts/:id/favorite` | Update only `favorite` field |
| **DELETE** | `/api/contacts/:id` | Delete contact |

---

### 🔐 Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| **POST** | `/api/users/register` | Register new user (default avatar & subscription) |
| **POST** | `/api/users/login` | Log in & receive JWT |
| **GET** | `/api/users/current` | Get current user (requires JWT) |
| **POST** | `/api/users/logout` | Log out user |
| **PATCH** | `/api/users/subscription` | Update subscription (`starter`, `pro`, `business`) |

---

### 📧 Email Verification

| Method | Endpoint | Description |
|--------|----------|-------------|
| **GET** | `/api/users/verify/:verificationToken` | Confirm email |
| **POST** | `/api/users/verify` | Resend verification email |

---

### 🖼 Avatars

| Method | Endpoint | Description |
|--------|----------|-------------|
| **PATCH** | `/api/users/avatars` | Upload & update user avatar (Multer + Jimp) |

---

<div align="center">

🚀 Built as part of a complete Node.js backend learning journey.

</div>
