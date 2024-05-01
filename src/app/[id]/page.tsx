import Link from 'next/link';

import { Chart } from '@/components/details/chart/Chart';
import { Overview } from '@/components/details/overview/Overview';

export default function Details() {
  return (
    <div className="flex flex-col gap-y-2">
      <Link href="/" className="text-sm font-semibold text-blue-500 hover:text-blue-700">
        back
      </Link>
      <Overview />
      <Chart />
    </div>
  );
}
