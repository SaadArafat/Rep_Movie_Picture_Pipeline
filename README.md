# Movie Picture Pipeline Project

## Project Overview

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
│   └── docker-compose.yml   # Compose for local and EC2 deployment
└── .github/
    └── workflows/
        ├── ci.yml           # Continuous Integration
        └── cd.yml           # Continuous Deployment
```

---

## 📡 Deployment Status

An AWS EC2 instance has been created and configured.  
Security group rules allow necessary ports (22, 3000, 5000).  
Docker and Docker Compose have been set up on the EC2 instance.

> ⚠️ Due to time constraints, the backend and frontend services are **not fully accessible via public URLs** at the time of submission.  
> However, CI/CD pipelines have been implemented and verified through GitHub Actions logs.

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
- Backend: [http://localhost:5000](http://localhost:5000)

---

## 👤 Author

**Saad Arafat**  
Capstone Project – Cloud DevOps Engineer Nanodegree  
GitHub: [@SaadArafat](https://github.com/SaadArafat)

---

## 📝 Reviewer Notes

- CI/CD implementation complete and functional
- Workflows have been triggered and validated
- EC2 deployment environment is configured
- Frontend/backend currently not exposed publicly due to time constraints
