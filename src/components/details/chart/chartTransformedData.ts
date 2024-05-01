// eslint-disable-next-line import/named
import { ChartData } from 'chart.js';
import dayjs from 'dayjs';

import { AssetHistory } from '@/services/types/details';

export const chartTransformedData = (
  dataHistory: AssetHistory[]
): ChartData<'line', number[], string> => {
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
            ? 'rgba(34,197,94, 0.1)'
            : 'rgba(239,68, 68, 0.1)',
        segment: {
          borderColor: ctx => {
            // compare each point with the first point, if it is greater than the first, then it is green, else red
            if (!dataPoints) return 'gray';
            return ctx.p1.parsed.y > dataPoints[0] ? 'rgba(34,197,94)' : 'rgba(239,68, 68)';
          },
        },
      },
    ],
  };
};
