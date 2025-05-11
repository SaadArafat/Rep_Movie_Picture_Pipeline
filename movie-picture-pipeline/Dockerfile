FROM python:3.8-slim

# تثبيت أدوات النظام اللازمة لبناء الحزم مثل MarkupSafe
RUN apt-get update && apt-get install -y \
    gcc \
    build-essential \
    libffi-dev \
    python3-dev \
    && rm -rf /var/lib/apt/lists/*

ENV PIP_NO_CACHE_DIR=yes

WORKDIR /app

COPY . .

# تحديث pip وتثبيت wheel قبل تثبيت الحزم الأخرى
RUN pip install --upgrade pip setuptools wheel

# تثبيت Flask (أو استخدام requirements.txt لو متوفر)
RUN pip install flask

CMD ["python", "app.py"]
