import React, { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL || "http://localhost:5000/movies")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched movies:", data);
        setMovies(data.movies || []); // Fallback in case API returns { movies: [...] }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>🎬 Movie List</h1>

      {loading && <p>Loading movies...</p>}

      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {!loading && !error && movies.length === 0 && (
        <p>No movies found.</p>
      )}

      {!loading && !error && movies.length > 0 && (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {movies.map((movie) => (
            <li
              key={movie.id}
              style={{
                margin: "10px 0",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            >
              {movie.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
