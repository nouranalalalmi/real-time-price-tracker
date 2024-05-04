import { Chart } from './chart/Chart';
import { Overview } from './overview/Overview';

export const Details = () => (
  <>
    <div className="flex w-full flex-col justify-between gap-6 md:flex-row">
      <Chart />
      <div className="w-full md:w-1/4">
        <Overview />
      </div>
    </div>
    <p className="p-2 text-xs font-semibold text-yellow-600">- Data is refetched every 3 minutes</p>
  </>
);
