import type { ChartProps } from 'react-chartjs-2';

export const chartOptions: ChartProps<'line'>['options'] = {
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
