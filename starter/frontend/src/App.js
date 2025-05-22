import React, { useEffect, useState } from 'react';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://107.20.183.9:5000/movies') // Replace with your EC2 IP
      .then((res) => res.json())
      .then((data) => {
        if (data.movies) {
          setMovies(data.movies);
        } else {
          console.error('Unexpected API response', data);
        }
      })
      .catch((err) => console.error('Error fetching movies:', err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Movie List</h1>
      {movies.length === 0 ? (
        <p>No movies found.</p>
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
