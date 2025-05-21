import sys
import os
import unittest

# Add current dir to path so app.py can be found
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

import app  # Make sure app.py is in the same folder

class TestApp(unittest.TestCase):

    def test_index(self):
        tester = app.app.test_client(self)
        response = tester.get('/')
        self.assertEqual(response.status_code, 200)

    def test_movies_endpoint_returns_200(self):
        with app.app.test_client() as client:
            status_code = int(os.getenv("FAIL_TEST", 200))
            response = client.get("/movies/")
            self.assertEqual(response.status_code, status_code)

    def test_movies_endpoint_returns_json(self):
        with app.app.test_client() as client:
            response = client.get("/movies/")
            self.assertEqual(response.content_type, "application/json")

    def test_movies_endpoint_returns_valid_data(self):
        with app.app.test_client() as client:
            response = client.get("/movies/")
            data = response.get_json()
            self.assertIsInstance(data, dict)
            self.assertIn("movies", data)
            self.assertIsInstance(data.get("movies"), list)
            self.assertGreater(len(data["movies"]), 0)
            self.assertIn("title", data["movies"][0])

if __name__ == '__main__':
    unittest.main()
