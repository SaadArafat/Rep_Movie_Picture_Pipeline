from flask import Flask, jsonify

app = Flask(__name__)


@app.route("/movies", methods=["GET"])
def get_movies():
    movies = [
        {"id": "123", "title": "Top Gun: Maverick"},
        {"id": "456", "title": "Sonic the Hedgehog"},
        {"id": "789", "title": "A Quiet Place"},
    ]
    return jsonify(movies)


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
