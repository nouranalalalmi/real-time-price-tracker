// eslint-disable-next-line import/named
import { ChartOptions } from 'chart.js';

export const chartOptions: ChartOptions<'line'> = {
  responsive: true,
  interaction: {
    intersect: false,
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Time',
      },
      ticks: {
        autoSkip: true,
        maxTicksLimit: 4,
        align: 'start',
      },
      grid: {
        display: false,
      },
    },
    y: {
      title: {
        display: true,
        text: 'Price ($)',
      },
    },
  },
};