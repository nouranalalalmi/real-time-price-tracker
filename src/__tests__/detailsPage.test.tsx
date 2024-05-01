import mockRouter from 'next-router-mock';

import Details from '@/app/[id]/page';

import { render, screen } from '../../test-utils';

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
    const { container } = render(<Details />);
    expect(screen.getByText(id)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
