import React, { useEffect, useState } from 'react';

const API_URL = process.env.REACT_APP_MOVIE_API_URL;

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        // Ensure the data structure is correct
        if (data && data.movies) {
          setMovies(data.movies);
        } else {
          console.error("Invalid data format:", data);
          setMovies([]);
        }
      })
      .catch(err => {
        console.error("Failed to fetch movies:", err);
        setMovies([]);
      });
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Movie List</h1>
      {movies.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {movies.map(movie => (
            <li key={movie.id}>🎬 {movie.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MovieList;
