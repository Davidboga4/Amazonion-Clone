import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SliderButtons from '@/app/slider_buttons'

describe('SliderButtons Component', () => {
  const mockGoToPrevious = jest.fn();
  const mockGoToNext = jest.fn();

  beforeEach(() => {
    // Make sure Tailwind's `sm:flex` is active
    window.innerWidth = 1024;
    window.dispatchEvent(new Event('resize'));

    render(<SliderButtons goToPrevious={mockGoToPrevious} goToNext={mockGoToNext} />);
  });

  it('renders previous and next buttons', () => {
    const prev = screen.getByRole('button', { name: /previous slide/i });
    const next = screen.getByRole('button', { name: /next slide/i });

    expect(prev).toBeInTheDocument();
    expect(next).toBeInTheDocument();
  });

  it('calls goToPrevious when previous button is clicked', () => {
    fireEvent.click(screen.getByRole('button', { name: /previous slide/i }));
    expect(mockGoToPrevious).toHaveBeenCalledTimes(1);
  });

  it('calls goToNext when next button is clicked', () => {
    fireEvent.click(screen.getByRole('button', { name: /next slide/i }));
    expect(mockGoToNext).toHaveBeenCalledTimes(1);
  });
});
