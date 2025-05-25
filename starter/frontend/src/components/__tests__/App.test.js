import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../../App";
process.env.REACT_APP_MOVIE_API_URL = "http://localhost:5000/movies";

test("renders Movie List heading", () => {
  render(<App />);
  const heading = screen.getByText(/Movie List/i);
  expect(heading).toBeInTheDocument();
});
