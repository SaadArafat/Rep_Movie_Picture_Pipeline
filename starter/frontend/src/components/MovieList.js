import React from "react";

function MovieList() {
  const [movies, setMovies] = React.useState([]);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    fetch(process.env.REACT_APP_MOVIE_API_URL)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setMovies(data);
        } else {
          setError("Invalid data format:");
        }
      })
      .catch((err) => {
        console.error("Failed to fetch movies:", err);
        setError("Unable to load movies.");
      });
  }, []);

  return (
    <div>
      <h1>Movie List</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul style={{ fontSize: "2rem", fontFamily: "Arial" }}>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
