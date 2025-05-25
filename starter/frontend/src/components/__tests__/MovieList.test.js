import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react';
import MovieList from "../MovieList";

beforeEach(() => {
  // Mock fetch response
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          movies: [
            { id: '1', title: 'Top Gun: Maverick' },
            { id: '2', title: 'Sonic the Hedgehog' },
            { id: '3', title: 'A Quiet Place' },
          ]
        })
    })
  );
});

afterEach(() => {
  jest.restoreAllMocks();
});

test("renders Movie List heading and movies", async () => {
  render(<MovieList />);

  expect(screen.getByText(/Movie List/i)).toBeInTheDocument();

  // Wait for one of the movie titles to appear
  const movieItem = await screen.findByText(/Top Gun: Maverick/i);
  expect(movieItem).toBeInTheDocument();
});
