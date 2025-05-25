import React from "react";

function App() {
  const [movies, setMovies] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    const api = process.env.REACT_APP_MOVIE_API_URL;

    
    console.log("Fetching from:", api);
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setMovies(data);
          setError("");
        } else {
          setError("Failed to fetch movies.");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching movies:", err);
        setError("Unable to load movies.");
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Movie List</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && (
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
