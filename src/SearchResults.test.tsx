import { BrowserRouter } from 'react-router-dom';
import { SearchResults } from './SearchResults';
import { render, screen } from '@testing-library/react';

const DUMMY_RESULTS = [
  {
    id: 1,
    title: 'The first result title',
    snippet: 'A first test result snippet',
    link: '#1234'
  },
  {
    id: 2,
    title: 'A second result title',
    snippet: 'A second test result snippet',
    link: '#456'
  }
];

test('renders the search result', () => {
  render(
    <BrowserRouter>
      <SearchResults results={DUMMY_RESULTS} />
    </BrowserRouter>
  );
  const title = screen.getByText(/first result title/i);
  expect(title).toBeInTheDocument();
  const snippet = screen.getByText(/first test result snippet/i);
  expect(snippet).toBeInTheDocument();
  const secondTitle = screen.getByText(/second result title/i);
  expect(secondTitle).toBeInTheDocument();
  const secondSnippet = screen.getByText(/second test result snippet/i);
  expect(secondSnippet).toBeInTheDocument();
});
