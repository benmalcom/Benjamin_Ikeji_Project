import { render, screen } from '@testing-library/react';
import movies from 'data/movies.json';
import MovieCard from './MovieCard';

describe('<MovieCard />', function () {
  test('Renders MovieCard without crash', () => {
    render(<MovieCard movie={movies[2]} />);
    expect(screen.getByText(/The Unexpected Journey/i)).toBeInTheDocument();
    expect(screen.getByText(/ACTION, ADVENTURE/i)).toBeInTheDocument();
    expect(screen.getByText(/64%/i)).toBeInTheDocument();
    expect(screen.getByText(/1/i)).toBeInTheDocument();
    const links = screen.getAllByRole('link');
    expect(links[0].textContent).toEqual('Movie Details');
    expect(links[0].getAttribute('href')).toContain(
      '/movies/5cd95395de30eff6ebccde58'
    );
    expect(links[1].textContent).toEqual('Watch Trailer');
    expect(links[1].getAttribute('href')).toContain(
      'youtube.com/results?search_query=The Unexpected Journey trailer'
    );
  });
});
