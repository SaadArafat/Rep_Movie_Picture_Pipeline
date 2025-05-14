import sys
import os
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

import app
import unittest

class TestApp(unittest.TestCase):
    def test_index(self):
        tester = app.app.test_client(self)
        response = tester.get('/')
        self.assertEqual(response.status_code, 200)

if __name__ == '__main__':
    unittest.main()

def test_movies_endpoint_returns_200():
    with app.test_client() as client:
        status_code = os.getenv("FAIL_TEST", 200)
        response = client.get("/movies/")
        assert response.status_code == status_code


def test_movies_endpoint_returns_json():
    with app.test_client() as client:
        response = client.get("/movies/")
        assert response.content_type == "application/json"


def test_movies_endpoint_returns_valid_data():
    with app.test_client() as client:
        response = client.get("/movies/")
        data = response.get_json()
        assert isinstance(data, dict)
        assert "movies" in data
        assert isinstance(data.get("movies"), list)
        assert len(data["movies"]) > 0
        assert "title" in data["movies"][0]
