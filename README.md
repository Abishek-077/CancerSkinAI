# 🧠 CancerSkinAI: AI-Powered Skin Cancer Detection  
> Deep Learning meets Dermatology — fast, accessible melanoma awareness.

[![🔗 Live Demo](https://img.shields.io/badge/Live-Demo-CancerSkinAI-green?style=for-the-badge)](https://mediskinai.vercel.app/)
[![Built with PyTorch](https://img.shields.io/badge/Built%20With-PyTorch-red?style=for-the-badge&logo=pytorch)]()
[![Frontend: React + Tailwind](https://img.shields.io/badge/Frontend-React%20%2B%20Tailwind-blue?style=for-the-badge&logo=react)]()
[![Backend: FastAPI](https://img.shields.io/badge/Backend-FastAPI-005571?style=for-the-badge&logo=fastapi)]()

---

## 👥 Team Members

- 👨‍💻 **Abishek Ghimire** – ML Engineering & Frontend Integration  
- 🧑‍💻 **Shreedhar Chaudhary** – Data Pipeline & Model Evaluation  
- 👩‍💻 **Puja Bhandari** – Frontend Design & UX Testing  
- 👩‍💻 **Shreya** – API Development & Documentation

---

## 🩺 Project Overview

**CancerSkinAI** is a full-stack AI web application that classifies dermoscopic skin lesion images as **benign** or **malignant** using deep learning.  
Inspired by the importance of early melanoma detection, our team built CancerSkinAI to explore how AI can assist in raising awareness for skin cancer — especially in underserved regions.

> 💡 **Mission**: Make skin cancer detection more accessible, understandable, and privacy-first through AI.

---

## 🧠 Tech Stack

| Layer         | Tools |
|---------------|-------|
| **Frontend**  | React, Vite, TailwindCSS |
| **Backend**   | FastAPI (Python), CORS |
| **AI Model**  | PyTorch (ResNet50 CNN) |
| **Dataset**   | ISIC 2020 Challenge Dataset (~33K expert-labeled images) |
| **Deployment**| Vercel (frontend), Render (backend) |

---

## 📊 Model Performance

- 🧠 **Architecture**: Custom ResNet50 CNN  
- 🖥️ **Training Device**: MacBook Pro (Apple M3 Pro chip)  
- ⏱️ **Training Time**: ~3 days using PyTorch MPS backend (no dedicated GPU)  
- 📈 **Test Accuracy**: **91%**  
- ⚖️ **Imbalance Handling**: Used class-weighted loss for ~15% malignant cases  
- 🔄 **Augmentations**: Random flips, lighting, zoom, rotation

---

## 🔐 Privacy-First Design

- 🚫 **No image is stored** on the server.
- 🔒 **Automatic deletion** of uploaded images post-inference.
- ⚠️ Clear disclaimer: **Not a clinical tool** — for awareness & education only.

---

## 🧪 Challenges We Solved

| Problem                        | Solution |
|-------------------------------|----------|
| ⚠️ Class imbalance (85/15)     | Applied weighted loss during training |
| 🌈 Diverse image quality       | Data augmentations (flip, light, noise) |
| 🧼 Privacy & trust             | Auto-delete images after prediction |
| 🧠 Choosing best architecture | Compared ResNet, EfficientNet, DenseNet |

---

## 🚀 What’s Next? (v2 Roadmap)

- [ ] 🐳 Dockerize frontend & backend for portability
- [ ] 🌐 Migrate backend to **Spring Boot** for scalability
- [ ] 📲 Full UI/UX redesign for mobile-first interaction
- [ ] ☁️ Host on **AWS EC2 with HTTPS**
- [ ] 📈 Add analytics to track user interaction (privacy-respecting)

---

## 🧬 Why ISIC 2020?

The **ISIC 2020 Challenge Dataset** is one of the largest, medically curated dermoscopic image sets, featuring real-world diagnosis complexity and imbalance.  
It’s widely used in research papers, hackathons, and clinical AI benchmarks.

---

## 📬 Contact & Collaboration

Feel free to connect or collaborate with any team member!

- 📧 **Abishek** – `ryuichi.y.lun@gmail.com`
- 💼 [Abishek's LinkedIn](https://www.linkedin.com/in/ryulun/)
- Or open an issue in this repo 🚀

---

## ⚠️ Disclaimer

> **CancerSkinAI is not a diagnostic tool.**  
> It is built for **educational and awareness purposes only**.  
> Always consult a licensed dermatologist for real medical concerns.

---

