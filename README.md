# 🎬 Movie Picture Pipeline – Capstone Project

## 🚀 Project Overview

This is the Movie Picture Pipeline project for the Udacity Cloud DevOps Engineer Nanodegree. The goal is to implement a full CI/CD pipeline to automatically build, test, and deploy a Dockerized frontend and backend application to AWS infrastructure.

This project demonstrates DevOps practices including GitHub Actions workflows, Docker containerization, AWS EC2 deployment, and integration of CI/CD pipelines.

---

## 🧱 Architecture Overview

- **CI/CD**: GitHub Actions
- **Containers**: Docker for both frontend and backend
- **Deployment**: AWS EC2 instance
- **Image Repository**: AWS Elastic Container Registry (ECR)
- **Orchestration**: Docker Compose

---

## ⚙️ CI/CD Workflows

Located in `.github/workflows/`:

### ✅ `ci.yml` – Continuous Integration
- Runs on every push or pull request
- Builds and tests backend and frontend via Docker Compose

### ✅ `cd.yml` – Continuous Deployment
- Builds Docker images for backend and frontend
- Pushes images to AWS ECR
- Connects to EC2 via SSH and deploys containers with Docker Compose

Both workflows are working and were successfully triggered — verified in GitHub Actions tab.

---

## 📦 Project Structure

```
Rep_Movie_Picture_Pipeline/
├── starter/
│   ├── backend/             # Flask-based backend API
│   ├── frontend/            # React frontend
│   ├── docker-compose.yml   # Compose for local and EC2 deployment
└── .github/
    └── workflows/
        ├── ci.yml           # Continuous Integration
        └── cd.yml           # Continuous Deployment
```

---

## 🌐 Live Application URLs

- 🔗 Frontend: [http://54.173.57.195:3000/manifest.json](http://54.173.57.195:3000/manifest.json)
- 🔗 Backend: [http://54.173.57.195:5000/movies](http://54.173.57.195:5000/movies)

---

## 📡 Deployment Status

An AWS EC2 instance has been created and configured with open ports:
- 22 (SSH)
- 3000 (Frontend)
- 5000 (Backend)

Docker and Docker Compose were installed, and both containers are running successfully on the EC2 instance.

---

## 🧪 How to Run Locally

### 1. Clone the repository
```bash
git clone https://github.com/SaadArafat/Rep_Movie_Picture_Pipeline.git
cd Rep_Movie_Picture_Pipeline/starter
```

### 2. Run the application
```bash
docker-compose up --build
```

### 3. Access the app
- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend: [http://localhost:5000/movies](http://localhost:5000/movies)

---

## 👤 Author

**Saad Arafat**  
Capstone Project – Cloud DevOps Engineer Nanodegree  
GitHub: [@SaadArafat](https://github.com/SaadArafat)

---

## 📝 Reviewer Notes

- CI/CD implementation is complete and functional via GitHub Actions
- Docker containers for frontend and backend are deployed to EC2
- Public URLs are accessible and working
- Please refer to workflows and logs in the repository for validation
