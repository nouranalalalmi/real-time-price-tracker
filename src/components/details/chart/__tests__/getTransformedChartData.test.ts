import { CHART_COLORS } from '@/constants';
import { useGetAssetHistory } from '@/services/details';

import { getTransformedChartData } from '../getTransformedChartData';
jest.mock('@/services/details');

describe('getTransformedChartData', () => {
  const dataHistory = (useGetAssetHistory as jest.Mock)().data || [];
  it('should return the correct chart data', () => {
    const result = getTransformedChartData(dataHistory);

    expect(result).toMatchSnapshot();
  });

  it('should handle empty data history', () => {
    const result = getTransformedChartData([]);

    expect(result.labels).toEqual([]);
    expect(result.datasets[0].data).toEqual([]);
    expect(result.datasets[0].backgroundColor).toEqual(CHART_COLORS.TRANSPARENT_RED);
  });

  it('should return the correct border color', () => {
    const dataHistory = [
      {
        date: '2022-01-01T00:00:00Z',
        priceUsd: '100',
        time: 1641027600,
        circulatingSupply: '18500000',
      },
      {
        date: '2022-01-02T00:00:00Z',
        priceUsd: '200',
        time: 1641114000,
        circulatingSupply: '18500000',
      },
    ];

    const result = getTransformedChartData(dataHistory);

    // Check the border color when the y value is greater than the first data point
    expect(result?.datasets[0]?.segment?.borderColor({ p1: { parsed: { y: 200 } } })).toEqual(
      CHART_COLORS.GREEN
    );

    // Check the border color when the y value is less than the first data point
    expect(result?.datasets[0]?.segment?.borderColor({ p1: { parsed: { y: 50 } } })).toEqual(
      CHART_COLORS.RED
    );

    // Check the border color when the y value is equal to the first data point
    expect(result?.datasets[0]?.segment?.borderColor({ p1: { parsed: { y: 100 } } })).toEqual(
      CHART_COLORS.RED
    );
  });
});
