import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { usePriceStore } from '@/stores/pricesStore';
import { FormattedNumber } from '@/ui/formattedNumber/FormattedNumber';
import { PriceChangeIndicator } from '@/ui/priceChangeIndicator/PriceChangeIndicator';

import { AssetPriceInterface } from './Row.interface';

export const Row = ({ asset }: AssetPriceInterface) => {
  const prices = usePriceStore(state => state.prices);
  const price = prices[asset.tickerId.toUpperCase()];
  const router = useRouter();

  return (
    <tr
      className="cursor-pointer hover:bg-gray-100"
      onClick={() => router.push(`/details/${asset.id}`)}>
      <td className="flex items-center gap-x-2">
        <div className="relative size-9">
          <Image
            src={asset.logo}
            alt={asset.name}
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-lg uppercase">{asset.symbol}</span>
          <span className="text-xs text-gray-500">{asset.name}</span>
        </div>
      </td>
      <td>
        <FormattedNumber prefix="$" value={price?.lastPrice} />
      </td>
      <td>
        <FormattedNumber prefix="$" value={price?.priceChange} />
      </td>
      <td>
        <PriceChangeIndicator percent={price?.priceChangePercent} />
      </td>
    </tr>
  );
};
