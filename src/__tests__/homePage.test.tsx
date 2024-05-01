import Home from '@/app/page';
import { render, screen } from '../../test-utils';
import { COINS } from '@/constants';

describe('Home page', () => {
  it('matches snapshot', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });

  it('renders coins', () => {
    render(<Home />);

    COINS.forEach(({ name }) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });
});
