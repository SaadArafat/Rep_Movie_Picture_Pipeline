# 🎬 Movie Picture Pipeline

This project implements a CI/CD pipeline using GitHub Actions to automatically test and deploy a containerized full-stack movie web app (frontend + backend) to an AWS EC2 instance.

---

## 🚀 Live Application URLs

- **Frontend (React)**: http://107.20.183.9:3000/
- **Backend (Flask API)**: http://107.20.183.9:5000/movies  

These endpoints confirm the application is up and running on EC2.

---

## 🛠️ Project Structure

```bash
starter/
├── backend/     # Flask API
├── frontend/    # React UI
└── docker-compose.yml
```

---

## ⚙️ CI/CD Pipelines

GitHub Actions workflows are defined in `.github/workflows/` and configured as follows:

| Workflow File           | Purpose                  |
|-------------------------|--------------------------|
| `frontend-ci.yaml`      | Lint, test, and cache frontend dependencies |
| `frontend-cd.yaml`      | Deploy React app to EC2 via SSH |
| `backend-ci.yaml`       | Lint, test, and cache Python dependencies |
| `backend-cd.yaml`       | Deploy Flask app to EC2 via SSH |

### ✅ Caching Implemented
Each CI workflow uses `actions/cache@v3` to restore and save dependencies:
- Frontend: `~/.npm`
- Backend: `~/.cache/pip`

---

## 💻 Deployment Details

- **EC2**: Amazon Linux 2023, Docker & Docker Compose installed  
- **Docker Compose**: Orchestrates both services using the `docker-compose.yml` file  
- **Auto Restart**: Containers use `restart: always` to stay active  

```bash
docker-compose up -d --build
```

---

## 📦 Technologies Used

- **Frontend**: React
- **Backend**: Flask + Python
- **CI/CD**: GitHub Actions
- **Infrastructure**: AWS EC2 + Docker

---

## 📄 Notes for Reviewers

All four required GitHub workflows are implemented and functional.  
Deployment is accessible at the provided IP above.  
Logs are available in the GitHub Actions tab of this repo.

---

## 🧑‍💻 Author

Saad Arafat  
Udacity Cloud DevOps Engineer Nanodegree
