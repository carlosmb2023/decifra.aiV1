import { render, screen } from '@testing-library/react';
import Loader from '../Loader';

describe('Loader', () => {
  it('renderiza o loader corretamente', () => {
    render(<Loader />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });
});