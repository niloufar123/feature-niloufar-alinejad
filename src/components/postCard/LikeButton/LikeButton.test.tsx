import { render, screen, fireEvent } from '@testing-library/react';
import LikeButton from '.';

describe('LikeButton', () => {
  it('renders with "Like" when not liked', () => {
    render(<LikeButton liked={false} onClick={() => {}} />);
    const button = screen.getByRole("button", { name: /like/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-gray-200');
  });

  it('renders with "Unlike" when liked', () => {
    render(<LikeButton liked={true} onClick={() => {}} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Unlike');
    expect(button).toHaveClass('bg-red-500');
  });

  it('calls the onClick function when clicked', () => {
    const handleClick = jest.fn();
    render(<LikeButton liked={false} onClick={handleClick} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('toggles between "Like" and "Unlike" based on the liked prop', () => {
    const { rerender } = render(<LikeButton liked={false} onClick={() => {}} />);
    
    let button = screen.getByRole('button');
    expect(button).toHaveTextContent('Like');
    
    rerender(<LikeButton liked={true} onClick={() => {}} />);
    button = screen.getByRole('button');
    expect(button).toHaveTextContent('Unlike');
  });
});
