import React, { useEffect, useState } from 'react';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = process.env.REACT_APP_MOVIE_API_URL || 'http://localhost:5000/movies';

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        setMovies(data.movies || []);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Movie List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : movies.length > 0 ? (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
}

export default App;
