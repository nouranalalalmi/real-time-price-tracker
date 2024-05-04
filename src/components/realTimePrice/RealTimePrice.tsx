import { COINS } from '@/constants';
import { usePriceStore } from '@/stores/pricesStore';
import { FormattedNumber } from '@/ui/formattedNumber/FormattedNumber';

import { RealTimePriceInterface } from './RealTimePrice.interface';

export const RealTimePrice = ({ id }: RealTimePriceInterface) => {
  const prices = usePriceStore(state => state.prices);
  const coin = COINS.find(coin => coin.id === id);

  return (
    coin &&
    prices[coin.tickerId.toUpperCase()] && (
      <FormattedNumber value={prices[coin.tickerId.toUpperCase()]?.lastPrice} prefix="$" />
    )
  );
};
