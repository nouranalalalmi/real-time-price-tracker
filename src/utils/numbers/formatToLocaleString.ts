export const formatToLocaleString = (value: number | string | undefined) => {
  const numberValue = Number(value);

  if (isNaN(numberValue)) {
    return '-';
  }

  return numberValue.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
