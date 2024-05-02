import { formatToLocaleString } from '@/utils/numbers/formatToLocaleString';

import { Spinner } from '../spinner/Spinner';

import { FormattedNumberInterface } from './FormattedNumber.interface';

/**
 * The FormattedNumber component takes a numeric value, a prefix, and a suffix as props.
 * If the value is undefined, it renders a Spinner component.
 * Otherwise, it formats the value as a locale string and renders it with the optional prefix and suffix.
 */
export const FormattedNumber = ({ value, prefix, suffix }: FormattedNumberInterface) => {
  if (value === undefined) {
    return <Spinner />;
  }

  return (
    <>
      {prefix}
      {formatToLocaleString(value)}
      {suffix}
    </>
  );
};
