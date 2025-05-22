import React, { useEffect, useState } from 'react';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_MOVIE_API_URL}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.movies || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>🎬 Movie List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : movies.length > 0 ? (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {movies.map((movie) => (
            <li key={movie.id} style={{ margin: '0.5rem 0' }}>
              🎞️ {movie.title}
            </li>
          ))}
        </ul>
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
}

export default App;
