import mockRouter from 'next-router-mock';

import DetailsPage from '@/app/details/[id]/page';

import { render, screen } from '../../../test-utils';

jest.mock('@/services/details');

describe('Details page', () => {
  const id = 'bitcoin';
  beforeAll(() => {
    mockRouter.push({
      pathname: '/:id',
      query: {
        id,
      },
    });
  });

  it('matches snapshot', () => {
    const { container } = render(<DetailsPage params={{ id: 'bitcoin' }} />);
    expect(screen.getByText(id)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render no data found', () => {
    render(<DetailsPage params={{ id: 'invalid coin' }} />);
    expect(screen.getByText('No data found for invalid coin')).toBeInTheDocument();
  });
});
