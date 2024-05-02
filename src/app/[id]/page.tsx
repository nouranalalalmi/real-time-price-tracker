import Link from 'next/link';

import { Chart } from '@/components/details/chart/Chart';
import { Overview } from '@/components/details/overview/Overview';

export default function Details() {
  return (
    <div className="flex flex-col gap-y-2">
      <Link href="/" className="w-fit text-sm font-semibold text-blue-500 hover:text-blue-700">
        ← back to live ticker
      </Link>
      <div className="flex w-full flex-col justify-between gap-6 md:flex-row">
        <Chart />
        <div className="w-full md:w-1/4">
          <Overview />
        </div>
      </div>
      <p className="p-2 text-xs font-semibold text-yellow-600">
        - Data is refetched every 3 minutes
      </p>
    </div>
  );
}
