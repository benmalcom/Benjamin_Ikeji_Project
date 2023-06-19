import { render } from '@testing-library/react';
import QuoteCard from './QuoteCard';

describe('<QuoteCard />', function () {
  test('renders the quote and characters name correctly', () => {
    const quote = {
      dialog: 'I am your father',
      _id: '5cd96e05de30eff6ebcce9ba',
      movie: '5cd95395de30eff6ebccde5b',
      character: '5cd99d4bde30eff6ebccfea0',
      id: '5cd96e05de30eff6ebcce9ba',
    };
    const charactersName = 'Darth Vader';

    const { getByText } = render(
      <QuoteCard quote={quote} charactersName={charactersName} />
    );

    expect(getByText(quote.dialog)).toBeInTheDocument();
    expect(getByText(`- ${charactersName}`)).toBeInTheDocument();
  });

  test('renders the quote with the default "Unknown" characters name when not provided', () => {
    const quote = {
      dialog: 'I am your father',
      _id: '5cd96e05de30eff6ebcce9ba',
      movie: '5cd95395de30eff6ebccde5b',
      character: '5cd99d4bde30eff6ebccfea0',
      id: '5cd96e05de30eff6ebcce9ba',
    };

    const { getByText } = render(<QuoteCard quote={quote} />);

    expect(getByText(quote.dialog)).toBeInTheDocument();
    expect(getByText('- Unknown')).toBeInTheDocument();
  });
});
