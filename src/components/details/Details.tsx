'use client';
import { useParams } from 'next/navigation';

import { RealTimePrice } from '../realTimePrice/RealTimePrice';

import { Chart } from './chart/Chart';
import { Overview } from './overview/Overview';

export const Details = () => {
  const { id } = useParams();

  return (
    <>
      <div className="flex w-full flex-col justify-between gap-6 md:flex-row">
        <Chart />
        <div className="w-full md:w-1/4">
          <Overview />
        </div>
      </div>
      <p>
        Real time price: <RealTimePrice id={id as string} />
      </p>
    </>
  );
};
