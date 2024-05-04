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
        display: false,
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
