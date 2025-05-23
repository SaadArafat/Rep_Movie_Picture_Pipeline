import React, { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Call the backend using the environment variable
    fetch(`${process.env.REACT_APP_MOVIE_API_URL}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.movies || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Movie List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul style={{ listStyle: "none", padding: "0px" }}>
          {movies.map((movie) => (
            <li key={movie.id}>&bull; {movie.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
