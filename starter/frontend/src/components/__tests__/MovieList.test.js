import React from "react";
import { render, screen } from "@testing-library/react";
import MovieList from "../MovieList";

test("renders Movie List heading and movies", () => {
  render(<MovieList />);
  const heading = screen.getByText(/Movie List/i);
  expect(heading).toBeInTheDocument();
});
