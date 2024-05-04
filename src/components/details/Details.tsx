import { COINS } from '@/constants';

import { Chart } from './chart/Chart';
import { Overview } from './overview/Overview';

// This function runs at build time and generates the list of all possible paths for dynamic routes
export async function getStaticPaths() {
  const paths = COINS.map(coin => ({
    params: { id: coin.id.toString() },
  }));

  return { paths, fallback: false };
}

// This function runs for each path returned by getStaticPaths and fetches the data for that page
export async function getStaticProps({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const coin = COINS.find(coin => coin.id.toString() === params.id);

  if (!coin) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      coin,
    },
  };
}

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
