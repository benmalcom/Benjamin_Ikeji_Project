import { render, screen } from '@testing-library/react';
import InfoPane from './InfoPane';

describe('<InfoPane />', function () {
  test('Renders InfoPane without crash', () => {
    render(<InfoPane message="Process successful!" />);
    expect(screen.getByText(/Process successful!/i)).toBeInTheDocument();
  });

  test(`Renders with a heading`, () => {
    render(<InfoPane message="Process successful!" heading="Information" />);
    expect(screen.getByText(/Process successful!/i)).toBeInTheDocument();
    expect(screen.getByText(/Information/i)).toBeInTheDocument();
  });
});
