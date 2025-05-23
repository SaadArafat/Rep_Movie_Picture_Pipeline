import React, { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(process.env.REACT_APP_MOVIE_API_URL);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        console.log("Fetched movies:", data);
        setMovies(data.movies || []);
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Unable to load movies. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Movie List</h1>

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && movies.length > 0 && (
        <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
          {movies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      )}

      {!loading && !error && movies.length === 0 && (
        <p>No movies found.</p>
      )}
    </div>
  );
}

export default App;
