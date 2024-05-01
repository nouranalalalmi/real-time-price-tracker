import { getColorsClasses } from '@/utils/numbers/getColorsClasses';

import { FormattedNumber } from '../formattedNumber/FormattedNumber';

import { PriceChangeIndicatorInterface } from './PriceChangeIndicator.interface';

export const PriceChangeIndicator = ({ percent }: PriceChangeIndicatorInterface) => {
  const { bg, text } = getColorsClasses(percent);

  return (
    <div className={`${bg} ${text} w-fit rounded-xl px-2 py-1 text-xs font-semibold`}>
      <FormattedNumber suffix="%" value={percent} />
    </div>
  );
};
