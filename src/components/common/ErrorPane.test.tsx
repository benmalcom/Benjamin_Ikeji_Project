import { Button } from '@chakra-ui/react';
import { render, screen } from '@testing-library/react';
import ErrorPane from './ErrorPane';

describe('<ErrorPane />', function () {
  test('Renders ErrorPane without crash', () => {
    render(<ErrorPane error="An error occured" />);
    expect(screen.getByText(/An error occured/i)).toBeInTheDocument();
  });

  test(`Renders with a cta button`, () => {
    render(
      <ErrorPane error="An error occured" cta={<Button>Click here</Button>} />
    );
    expect(screen.getByText(/An error occured/i)).toBeInTheDocument();

    expect(screen.getByText(/Click here/i)).toBeInTheDocument();
  });
});
