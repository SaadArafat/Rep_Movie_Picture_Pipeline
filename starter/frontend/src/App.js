import React, { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(process.env.REACT_APP_MOVIE_API_URL || "http://localhost:5000/movies")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch");
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        setMovies(data.movies || data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>🎬 Movie List</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {!loading && movies.length === 0 && <p>No movies found.</p>}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {movies.map((movie, index) => (
          <li
            key={movie.id || index}
            style={{
              padding: "10px",
              margin: "5px 0",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          >
            {movie.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
