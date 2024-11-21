import { render, screen, fireEvent } from '@testing-library/react';
import BookmarkButton from '.';

describe('BookmarkButton', () => {
  it('renders with "Mark" when not marked', () => {
    render(<BookmarkButton marked={false} onClick={() => {}} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Mark');
    expect(button).toHaveClass('bg-gray-200');
  });

  it('renders with "UnMark" when marked', () => {
    render(<BookmarkButton marked={true} onClick={() => {}} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('UnMark');
    expect(button).toHaveClass('bg-green-700');
  });

  it('calls the onClick function when clicked', () => {
    const handleClick = jest.fn();
    render(<BookmarkButton marked={false} onClick={handleClick} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('toggles between "Mark" and "UnMark" based on the marked prop', () => {
    const { rerender } = render(
      <BookmarkButton marked={false} onClick={() => {}} />
    );

    let button = screen.getByRole('button');
    expect(button).toHaveTextContent('Mark');

    rerender(<BookmarkButton marked={true} onClick={() => {}} />);
    button = screen.getByRole('button');
    expect(button).toHaveTextContent('UnMark');
  });
});
