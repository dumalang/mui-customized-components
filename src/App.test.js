import { render, screen } from '@testing-library/react';
import AppDefault from './AppDefault';

test('renders learn react link', () => {
  render(<AppDefault />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
