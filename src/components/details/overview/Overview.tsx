'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';

import { COINS } from '@/constants';
import { useGetAssetDetails } from '@/services/details';
import { FormattedNumber } from '@/ui/formattedNumber/FormattedNumber';
import { getColorsClasses } from '@/utils/numbers/getColorsClasses';

import { OverviewItem } from './OverviewItem';

export const Overview = () => {
  const { id } = useParams();
  const { data } = useGetAssetDetails(id as string);
  const logo = COINS.find(c => c.id === id)?.logo;

  return (
    <div className="flex w-full flex-col">
      <h1 className="pb-2 text-3xl font-semibold">Overview</h1>
      <div className="flex flex-col gap-y-4 rounded-lg border bg-white p-4 shadow-sm">
        <div className="flex items-center gap-2 border-b">
          <h2 className="text-2xl capitalize">{id}</h2>
          {logo && <Image src={`../${logo}`} width={25} height={25} alt="asset-logo" />}
        </div>
        <div className="flex flex-col gap-y-4 text-left">
          <OverviewItem label="Rank">#{data?.rank}</OverviewItem>
          <OverviewItem label="Symbol">{data?.symbol}</OverviewItem>
          <OverviewItem label="Market cap">
            <FormattedNumber value={data?.marketCapUsd} />
          </OverviewItem>
          <OverviewItem label="Volume change (24hr)">
            <FormattedNumber value={data?.volumeUsd24Hr} />
          </OverviewItem>
          <OverviewItem label="Price">
            <FormattedNumber prefix="$" value={data?.priceUsd} />
          </OverviewItem>
          <OverviewItem label="Price change (24hr)">
            <div className={getColorsClasses(data?.changePercent24Hr).text}>
              <FormattedNumber suffix="%" value={data?.changePercent24Hr} />
            </div>
          </OverviewItem>
          <p className="text-xs font-semibold text-yellow-600">*Refetched every 3 minutes</p>
        </div>
      </div>
    </div>
  );
};
