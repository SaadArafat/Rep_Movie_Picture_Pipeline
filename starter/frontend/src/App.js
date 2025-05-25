import React from "react";

function App() {
  const [movies, setMovies] = React.useState([]);
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    console.log("Fetching from:", process.env.REACT_APP_MOVIE_API_URL);
    fetch(process.env.REACT_APP_MOVIE_API_URL)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setMovies(data);
        } else {
          setError("Invalid data format:");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch movies:", err);
        setError("Unable to load movies.");
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Movie List</h1>
      {loading && <p>Loading movies...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && (
        <ul style={{ fontSize: "2rem", fontFamily: "Arial" }}>
          {movies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
