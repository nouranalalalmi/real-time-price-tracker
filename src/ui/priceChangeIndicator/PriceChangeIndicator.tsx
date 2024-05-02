import { getColorsClasses } from '@/utils/numbers/getColorsClasses';

import { FormattedNumber } from '../formattedNumber/FormattedNumber';

import { PriceChangeIndicatorInterface } from './PriceChangeIndicator.interface';

/**
 * The PriceChangeIndicator component takes a percent value as a prop.
 * It uses the getColorsClasses utility function to determine the background and text colors based on the percent value.
 * It then renders a div with these colors, and inside this div, it renders a FormattedNumber component with the percent value and a "%" suffix.
 */
export const PriceChangeIndicator = ({ percent }: PriceChangeIndicatorInterface) => {
  const { bg, text } = getColorsClasses(percent);

  return (
    <div className={`${bg} ${text} w-fit rounded-xl px-2 py-1 text-xs font-semibold`}>
      <FormattedNumber suffix="%" value={percent} />
    </div>
  );
};
