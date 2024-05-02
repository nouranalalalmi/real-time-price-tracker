import dayjs from 'dayjs';
import type { ChartProps } from 'react-chartjs-2';

import { CHART_COLORS } from '@/constants';
import { AssetHistory } from '@/services/types/details';

export const getTransformedChartData = (
  dataHistory: AssetHistory[]
): ChartProps<'line'>['data'] => {
  const labels = dataHistory?.map(item => dayjs(item.date).format('DD-MM-YYYY hh:mm a'));
  const dataPoints = dataHistory?.map(item => Number(item.priceUsd));

  return {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Price',
        data: dataPoints,
        backgroundColor:
          // compare the last data point with the first, if it is is greater than the first, then it is green, else red
          dataPoints && dataPoints.slice(-1)[0] >= dataPoints[0]
            ? CHART_COLORS.TRANSPARENT_GREEN
            : CHART_COLORS.TRANSPARENT_RED,
        segment: {
          borderColor: ctx => {
            // compare each point with the first point, if it is greater than the first, then it is green, else red
            return ctx.p1.parsed.y > dataPoints[0] ? CHART_COLORS.GREEN : CHART_COLORS.RED;
          },
        },
      },
    ],
  };
};
