import { render, screen } from '@testing-library/react';
import characters from 'data/characters.json';
import CharacterCard from './CharacterCard';

describe('<CharacterCard />', function () {
  test('Renders CharacterCard without crash', () => {
    render(<CharacterCard character={characters[0]} />);
    expect(screen.getByText(/Adanel/i)).toBeInTheDocument();
    expect(screen.getByText(/Human/i)).toBeInTheDocument();
    const link = screen.getByRole('link');
    expect(link.textContent).toEqual('More info');
    expect(link.getAttribute('href')).toBe(
      'http://lotr.wikia.com//wiki/Adanel'
    );
  });
});
