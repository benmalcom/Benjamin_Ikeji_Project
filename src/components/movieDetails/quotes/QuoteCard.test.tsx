import { render, screen } from '@testing-library/react';
import quotes from 'data/quotes.json';
import QuoteCard from './QuoteCard';

describe('<QuoteCard />', function () {
  test('Renders QuoteCard without crash', () => {
    render(<QuoteCard quote={quotes[0]} />);
    expect(
      screen.getByText(
        /Sauron's wrath will be terrible, his retribution swift/i
      )
    ).toBeInTheDocument();
    expect(screen.getByText(/- Unknown/i)).toBeInTheDocument();
  });

  test(`Renders movie character's name instead of Unknown`, () => {
    render(<QuoteCard quote={quotes[0]} charactersName="Adanel" />);
    expect(
      screen.getByText(
        /Sauron's wrath will be terrible, his retribution swift/i
      )
    ).toBeInTheDocument();
    expect(screen.getByText(/- Adanel/i)).toBeInTheDocument();
  });
});
