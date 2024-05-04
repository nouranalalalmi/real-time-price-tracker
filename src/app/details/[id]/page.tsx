import Link from 'next/link';

import { Details } from '@/components/details/Details';
import { COINS } from '@/constants';

export async function getStaticPaths() {
  const paths = COINS.map(coin => ({
    params: { id: coin.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps() {
  // Fetch data based on params.id here
  // ...

  return {
    props: {
      // Your data here
    },
  };
}

export default function DetailsPage({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  return (
    <div className="flex flex-col gap-y-2">
      <Link href="/" className="w-fit text-sm font-semibold text-blue-500 hover:text-blue-700">
        ← back to live ticker
      </Link>
      {!COINS.some(coin => coin.id === id) ? <p>No data found for {id}</p> : <Details />}
    </div>
  );
}
