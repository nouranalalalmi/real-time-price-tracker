import Link from 'next/link';

import { Details } from '@/components/details/Details';
import { COINS } from '@/constants';

interface DetailsPageInterface {
  params: {
    id: string;
  };
}

export default function DetailsPage({ params: { id } }: DetailsPageInterface) {
  return (
    <div className="flex flex-col gap-y-2">
      <Link href="/" className="w-fit text-sm font-semibold text-blue-500 hover:text-blue-700">
        ← back to live ticker
      </Link>
      {!COINS.some(coin => coin.id === id) ? <p>No data found for {id}</p> : <Details />}
    </div>
  );
}

export async function generateStaticParams() {
  return COINS.map(coin => ({
    id: coin.id,
  }));
}
