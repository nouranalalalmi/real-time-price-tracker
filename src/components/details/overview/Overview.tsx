'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';

import { COINS } from '@/constants';
import { useGetAssetDetails } from '@/services/details';
import { FormattedNumber } from '@/ui/formattedNumber/FormattedNumber';
import { Spinner } from '@/ui/spinner/Spinner';
import { getColorsClasses } from '@/utils/numbers/getColorsClasses';

import { OverviewItem } from './OverviewItem';

export const Overview = () => {
  const { id } = useParams();
  const { isLoading, data } = useGetAssetDetails(id as string);
  const logo = COINS.find(c => c.id === id)?.logo;

  if (!isLoading && !data) {
    return <p>No data found for {id}</p>;
  }

  return (
    <div>
      <div className="mb-2 flex items-center gap-2">
        <h1 className="text-2xl font-semibold">
          Overview - <span className="capitalize">{id}</span>
        </h1>
        {logo && <Image src={logo} width={25} height={25} alt="asset-logo" />}
      </div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="grid gap-4 rounded-lg border p-4 text-left shadow-sm md:grid-cols-2 lg:grid-cols-3">
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
        </div>
      )}
    </div>
  );
};
