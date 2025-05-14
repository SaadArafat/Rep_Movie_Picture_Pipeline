from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return 'Hello from the Movie App!'

@app.route('/movies/')
def movies():
    sample_movies = [
        {"title": "Inception"},
        {"title": "The Matrix"},
        {"title": "Interstellar"}
    ]
    return jsonify({"movies": sample_movies})

if __name__ == '__main__':
    app.run(debug=True)
