import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import mockRouter from 'next-router-mock';

import { useGetAssetHistory } from '@/services/details';
import { RangeEnum } from '@/services/types/details';

import { Chart } from '../Chart';

jest.mock('@/services/details');
jest.mock('react-chartjs-2', () => ({
  Line: () => null,
}));

describe('Chart', () => {
  beforeEach(() => {
    mockRouter.push({ pathname: '/:id', query: { id: 'bitcoin' } });
  });

  it('should render all ranges', () => {
    render(<Chart />);

    Object.values(RangeEnum).map(range => {
      const rangeButton = screen.getByRole('button', { name: range });
      expect(rangeButton).toBeInTheDocument();
    });
  });

  it('should render the chart with default range on 1d and call useGetAssetHistory', () => {
    render(<Chart />);

    const rangeButton = screen.getByText('1d');
    expect(rangeButton).toHaveClass('bg-blue-100');
    expect(useGetAssetHistory).toHaveBeenCalledWith({ asset: 'bitcoin', range: '1d' });
  });

  Object.values(RangeEnum).map(range => {
    it(`should call useGetAssetHistory with the correct range when clicking on ${range}`, async () => {
      render(<Chart />);

      const rangeButton = screen.getByRole('button', { name: range });
      expect(rangeButton).toBeInTheDocument();
      await userEvent.click(rangeButton);

      expect(rangeButton).toHaveClass('bg-blue-100');
      expect(useGetAssetHistory).toHaveBeenCalledWith({ asset: 'bitcoin', range: '1d' });
    });
  });
});
