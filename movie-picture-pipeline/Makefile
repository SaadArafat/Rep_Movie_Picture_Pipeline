install:
	pip install -r requirements.txt

lint:
	pylint app.py

docker_build:
	docker build -t movie-picture .

docker_run:
	docker run -p 80:80 movie-picture