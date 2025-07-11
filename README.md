# 🧠 CancerSkinAI: AI-Powered Skin Cancer Detection  
> Deep Learning meets Dermatology — early melanoma awareness in seconds.

[![🔗 Live Demo](https://img.shields.io/badge/Live-Demo-green?style=for-the-badge)](https://mediskinai.vercel.app/)
[![🧠 Built with PyTorch](https://img.shields.io/badge/Built%20With-PyTorch-red?style=for-the-badge&logo=pytorch)]()
[![🖥️ Frontend: React + Tailwind](https://img.shields.io/badge/Frontend-React%20%2B%20Tailwind-blue?style=for-the-badge&logo=react)]()
[![⚙️ Backend: FastAPI](https://img.shields.io/badge/Backend-FastAPI-005571?style=for-the-badge&logo=fastapi)]()

---

## 🩺 Overview

**CancerSkinAI** is a full-stack AI application that analyzes dermoscopic skin images and predicts whether a lesion is **benign or malignant**.  
Born out of a personal mission to raise awareness around skin cancer, this project leverages deep learning for socially impactful healthcare innovation.

> 🎯 **Goal**: Build an accessible, fast, and private skin lesion classification tool using state-of-the-art AI.

---

## 👨‍💻 My Role  
🗓️ *AI Engineer & Full-Stack Developer (Sept 2024 – Jan 2025)*

- 🧠 Trained a custom **ResNet50 CNN** using **PyTorch** on the **ISIC 2020 Challenge Dataset** (~33,000 images)
- 📈 Achieved **91% test accuracy**, using **class-weighted loss** to handle heavy class imbalance (~85% benign)
- 🧪 Validated performance on unseen data, comparing against EfficientNet and DenseNet
- 🧩 Built a sleek, mobile-first UI using **React, Vite, and TailwindCSS**
- 🔐 Deployed a privacy-focused **FastAPI backend** with auto-deletion of uploaded images post-inference
- 🌍 Deployed full-stack: **Render (backend)** + **Vercel (frontend)**

---

## 🧠 Tech Stack

| Layer         | Tools |
|---------------|-------|
| **Frontend**  | React, TailwindCSS, Vite |
| **Backend**   | FastAPI, Python |
| **AI Model**  | PyTorch (ResNet50) |
| **Dataset**   | ISIC 2020 Skin Lesion Dataset |
| **Deployment**| Vercel (frontend), Render (backend) |

---

## 📊 Model Performance

- **Architecture**: ResNet50 (custom-tuned)
- **Training Platform**: MacBook Pro (M3 Pro chip, no GPU)
- **Training Time**: ~3 days (PyTorch MPS + mixed precision)
- **Dataset**: ISIC 2020 (medical-grade, 33K+ expert-labeled images)
- **Test Accuracy**: **91%**
- **Imbalance Handling**: Class-weighted loss & aggressive augmentation

---

## 🔐 Privacy-First Features

- 🚫 **No data is stored** — images are deleted immediately after prediction
- 📢 Clear disclaimer: **This is not a diagnostic tool**
- 🧠 Intended purely for **education and awareness**

---

## 🔭 Challenges & Solutions

| 🧩 Challenge | ✅ Solution |
|-------------|------------|
| Severe class imbalance | Weighted cross-entropy loss |
| Real-world image variation | Data augmentation (flips, lighting, zoom, noise) |
| Privacy and trust | Instant image deletion post-inference |
| Deployment without GPU | Optimized for CPU + MPS backend |

---

## 🚀 v2 Roadmap (Coming Soon)

- [ ] 🐳 Dockerize frontend and backend
- [ ] ☁️ Migrate backend to **Spring Boot + PostgreSQL**
- [ ] 🔒 Deploy with HTTPS on **AWS EC2**
- [ ] 📱 UI/UX upgrades with full mobile accessibility
- [ ] 📊 Add lightweight analytics (privacy-respecting)

---

## 📬 Contact

Want to collaborate, ask a question, or explore the model?

- 📧 Email: `ryuichi.y.lun@gmail.com`
- 💼 LinkedIn: [linkedin.com/in/ryulun](https://www.linkedin.com/in/ryulun/)

---

## ⚠️ Disclaimer

> **CancerSkinAI is not a clinical diagnostic tool.**  
> It is meant for **educational and awareness** purposes only. For any medical concerns, consult a certified dermatologist.

---
