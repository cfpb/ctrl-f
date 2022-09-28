import { BrowserRouter } from 'react-router-dom';
import { Modal } from './Modal';
import { render, screen } from '@testing-library/react';

test('renders the modal', () => {
  render(
    <BrowserRouter>
      <Modal.Frame onClose={() => null}>
        <Modal.Body>Modal contents</Modal.Body>
      </Modal.Frame>
    </BrowserRouter>
  );
  const modalElement = screen.getByText(/Modal contents/i);
  expect(modalElement).toBeInTheDocument();
});
