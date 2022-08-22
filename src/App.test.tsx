import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Add SIMs button', () => {
  render(<App />);
  const linkElement = screen.getByText(/Add SIMs/i);
  expect(linkElement).toBeInTheDocument();
});
