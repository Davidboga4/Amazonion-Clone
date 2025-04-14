import React from 'react';
import { render, screen } from '@testing-library/react';
import Card1 from '@/app/card1';

// Mock the ImgComp component to isolate Card1's behavior
jest.mock('https://m.media-amazon.com/images/I/71f3BmjCwtL._AC_UL320_.jpg', () => ({ image, styles, imgStyles, altDesc, desc }: any) => (
  <div data-testid="img-comp">
    <img src={image} alt={altDesc} className={imgStyles} />
    <p>{desc}</p>
  </div>
));

describe('Card1 Component', () => {
  const mockTitle = 'Sample Card';
  const mockImages = [
    {
      src: 'https://example.com/image.jpg',
      description: 'Image description here',
    },
  ];

  it('renders the card title', () => {
    render(<Card1 title={mockTitle} images={mockImages} />);
    expect(screen.getByText(mockTitle)).toBeInTheDocument();
  });

  it('renders ImgComp', () => {
    render(<Card1 title={mockTitle} images={mockImages} />);
    expect(screen.getByTestId('img-comp')).toBeInTheDocument();
  });

  it('passes correct image src and description to ImgComp', () => {
    render(<Card1 title={mockTitle} images={mockImages} />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', mockImages[0].src);
    expect(image).toHaveAttribute('alt', 'image 1');
    expect(screen.getByText(mockImages[0].description)).toBeInTheDocument();
  });
});
