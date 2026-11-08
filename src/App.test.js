import { render, screen } from '@testing-library/react';
import App from './App';

test('renders lab week 09 student information', () => {
  render(<App />);
  expect(screen.getByText(/Welcome to Fullstack Development - I/i)).toBeInTheDocument();
  expect(screen.getByText(/React JS Programming Week09 Lab exercise/i)).toBeInTheDocument();
  expect(screen.getByText('101563313')).toBeInTheDocument();
  expect(screen.getByText(/George Brown Polytechnic, Toronto/i)).toBeInTheDocument();
});
