import mockRouter from 'next-router-mock';

import DetailsPage, { generateStaticParams } from '@/app/details/[id]/page';
import { COINS } from '@/constants';

import { render, screen } from '../../../test-utils';

jest.mock('@/services/details');

describe('Details page', () => {
  COINS.forEach(coin => {
    it(`renders details for ${coin.id}`, () => {
      mockRouter.push({
        pathname: '/:id',
        query: {
          id: coin.id,
        },
      });

      const { container } = render(<DetailsPage params={{ id: coin.id }} />);
      expect(screen.getByText(coin.id)).toBeInTheDocument();
      expect(container).toMatchSnapshot();
    });
  });

  it('should render no data found', () => {
    render(<DetailsPage params={{ id: 'invalid coin' }} />);
    expect(screen.getByText('No data found for invalid coin')).toBeInTheDocument();
  });

  it('returns an array of coin ids', async () => {
    const result = await generateStaticParams();
    const expected = COINS.map(coin => ({ id: coin.id }));

    expect(result).toEqual(expected);
  });
});
