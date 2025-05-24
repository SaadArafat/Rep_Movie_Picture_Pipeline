
import React from "react";
import axios from "axios";

function MovieDetails({ movie }) {
  const [details, setDetails] = React.useState(null);

  React.useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_MOVIE_API_URL}/movies/${movie.id}`)
      .then((response) => {
        setDetails(response.data);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });
  }, [movie]);

  if (!details) return <p>Loading movie details...</p>;

  return (
    <div>
      <h2>{details.title}</h2>
      <p>{details.description}</p>
    </div>
  );
}

export default MovieDetails;
