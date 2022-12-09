import { BrowserRouter } from 'react-router-dom';
import { SearchModal } from './SearchModal';
import { render, fireEvent, screen } from '@testing-library/react';

const DUMMY_SEARCH_DATA = [
  {
    id: 1,
    title: 'A test',
    contents: 'Some really great content',
    link: '#1'
  },
  {
    id: 2,
    title: 'Another test',
    contents: 'This content is completely different',
    link: '#2'
  },
  {
    id: 3,
    title: 'Real cool test',
    contents: 'And oh wow how different is this stuff',
    link: '#3'
  }
];

const defaultSearchOptions = {
  keys: ['contents'],
  includeMatches: true,
  includeScore: true,
  threshold: 0.5
};

test('renders the search modal', () => {
  render(
    <BrowserRouter>
      <SearchModal searchData={DUMMY_SEARCH_DATA} searchOptions={defaultSearchOptions} />
    </BrowserRouter>
  );
  const modalElement = screen.getByText(/Showing results/i);
  expect(modalElement).toBeInTheDocument();
});
