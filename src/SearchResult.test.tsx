import { BrowserRouter } from 'react-router-dom';
import { SearchResult } from './SearchResult';
import { render, screen } from '@testing-library/react';

const DUMMY_RESULT = {
  id: 1,
  title: 'Test result title',
  snippet: 'A test result snippet',
  link: '#1234'
};

test('renders the search result', () => {
  render(
    <BrowserRouter>
      <SearchResult
        id={DUMMY_RESULT.id}
        title={DUMMY_RESULT.title}
        snippet={DUMMY_RESULT.snippet}
        link={DUMMY_RESULT.link}
      />
    </BrowserRouter>
  );
  const title = screen.getByText(/test result title/i);
  expect(title).toBeInTheDocument();
  const snippet = screen.getByText(/test result snippet/i);
  expect(snippet).toBeInTheDocument();
});
