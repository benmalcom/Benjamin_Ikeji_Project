import { render, screen } from '@testing-library/react';
import MovieCard from './MovieCard';

const movie = {
  _id: '5cd95395de30eff6ebccde59',
  name: 'The Desolation of Smaug',
  runtimeInMinutes: 161,
  budgetInMillions: 217,
  boxOfficeRevenueInMillions: 958.4,
  academyAwardNominations: 3,
  academyAwardWins: 0,
  rottenTomatoesScore: 75,
};

describe('<MovieCard />', function () {
  test('Renders MovieCard without crash', () => {
    render(<MovieCard movie={movie} />);
    expect(screen.getByText(/The Desolation of Smaug/i)).toBeInTheDocument();
    expect(screen.getByText(/ACTION, ADVENTURE/i)).toBeInTheDocument();
    expect(screen.getByText(/75%/i)).toBeInTheDocument();
    expect(screen.getByText(/0/i)).toBeInTheDocument();
  });

  test('renders the movie card with correct external link for movie details', () => {
    const { getByText, getByRole } = render(<MovieCard movie={movie} />);

    expect(getByText('Movie Details')).toBeInTheDocument();
    expect(getByRole('link', { name: 'Movie Details' })).toHaveAttribute(
      'href',
      `/movies/${movie._id}`
    );
  });

  test('renders the movie card with correct external link for watching the trailer', () => {
    const { getByText, getByRole } = render(<MovieCard movie={movie} />);

    const expectedTrailerLink = `https://youtube.com/results?search_query=${encodeURIComponent(
      `${movie.name} trailer`
    )}`;
    expect(getByText('Watch Trailer')).toBeInTheDocument();
    expect(getByRole('link', { name: 'Watch Trailer' })).toHaveAttribute(
      'href',
      expectedTrailerLink
    );
  });
});
