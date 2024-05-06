import { render } from '@testing-library/react';
import mockRouter from 'next-router-mock';

import { Overview } from '../Overview';

jest.mock('@/services/details');

describe('Overview', () => {
  beforeEach(() => {
    mockRouter.push({ pathname: '/:id', query: { id: 'bitcoin' } });
  });

  it('should render the asset details when data is loaded', () => {
    const { container } = render(<Overview />);

    expect(container).toMatchSnapshot();
  });
});
