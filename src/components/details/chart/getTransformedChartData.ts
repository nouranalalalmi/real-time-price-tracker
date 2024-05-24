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
          ? ctx => getGradient(ctx.chart.ctx, CHART_COLORS.GREEN, CHART_COLORS.TRANSPARENT_WHITE)
          : ctx => getGradient(ctx.chart.ctx, CHART_COLORS.RED, CHART_COLORS.TRANSPARENT_WHITE),
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

const getGradient = (ctx: CanvasRenderingContext2D, colorFrom: string, colorTo: string) => {
  const gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height * 0.5)
  gradient.addColorStop(0, colorFrom)
  gradient.addColorStop(1, colorTo);
  return gradient
}