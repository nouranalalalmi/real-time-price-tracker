'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from 'chart.js';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { Line } from 'react-chartjs-2';

import { useGetAssetHistory } from '@/services/details';
import { RangeEnum } from '@/services/types/details';

import { chartOptions } from './chartOptions';
import { getTransformedChartData } from './getTransformedChartData';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler);

export const Chart = () => {
  const [range, setRange] = useState(RangeEnum.DAY);
  const { id } = useParams();
  const { data: dataHistory } = useGetAssetHistory({
    asset: id as string,
    range,
  });
  return (
    <div className="w-full">
      <h1 className="pb-2 text-3xl font-semibold">History</h1>
      <div className="rounded-lg border bg-white p-2 shadow-sm">
        <div className="flex justify-end gap-2">
          {Object.values(RangeEnum).map(enumVal => (
            <button
              data-testid={`range-${enumVal}`}
              key={enumVal}
              className={`border-current/30 rounded-lg border px-2 hover:bg-blue-50 ${
                range === enumVal && 'bg-blue-100'
              }`}
              onClick={() => setRange(enumVal)}>
              {enumVal}
            </button>
          ))}
        </div>
        <Line options={chartOptions} data={getTransformedChartData(dataHistory || [])} />
      </div>
    </div>
  );
};
