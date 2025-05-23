import React, { useEffect, useState } from 'react';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_URL = process.env.REACT_APP_MOVIE_API_URL;

  useEffect(() => {
    console.log("Fetching from:", API_URL); // Helpful for debugging

    fetch(API_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch movies.");
        }
        return response.json();
      })
      .then(data => {
        setMovies(data.movies || []);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching movies:", err);
        setError("Unable to load movies.");
        setLoading(false);
      });
  }, [API_URL]);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Movie List</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && !error && movies.length > 0 ? (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      ) : (!loading && !error) ? (
        <p>No movies found.</p>
      ) : null}
    </div>
  );
}

export default App;
