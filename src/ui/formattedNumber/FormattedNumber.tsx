import { formatToLocaleString } from '@/utils/numbers/formatToLocaleString';

import { Spinner } from '../spinner/Spinner';

import { FormattedNumberInterface } from './FormattedNumber.interface';

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
