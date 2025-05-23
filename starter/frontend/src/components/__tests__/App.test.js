import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../App';

test('renders Movie List heading', () => {
  render(<App />);
  
  // Use case-insensitive regex to match the heading text
  const heading = screen.getByText(/movie list/i);
  expect(heading).toBeInTheDocument();
});
