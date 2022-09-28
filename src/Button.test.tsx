import { BrowserRouter } from 'react-router-dom';
import { Button } from './Button';
import { render, fireEvent, screen } from '@testing-library/react';

test('renders the search button', () => {
  render(
    <BrowserRouter>
      <Button text={'Click me'} />
    </BrowserRouter>
  );
  const buttonElement = screen.getByText(/Click me/i);
  expect(buttonElement).toBeInTheDocument();
});

test('renders the search button with custom text', () => {
  render(
    <BrowserRouter>
      <Button text={'just a test'} />
    </BrowserRouter>
  );
  const buttonElement = screen.getByText(/just a test/i);
  expect(buttonElement).toBeInTheDocument();
});

test('updates params on click', () => {
  render(
    <BrowserRouter>
      <Button text={'test click'} />
    </BrowserRouter>
  );

  let searchParams = new URLSearchParams(window.location.search);
  let query = searchParams.get('search');

  expect(query).toBeFalsy();

  const buttonElement = screen.getByText(/test click/i);
  fireEvent.click(buttonElement);

  searchParams = new URLSearchParams(window.location.search);
  query = searchParams.get('search');

  expect(query).toBeTruthy();
});
