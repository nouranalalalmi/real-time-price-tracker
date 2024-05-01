export const colorClasses = {
  positive: { text: 'text-green-500', bg: 'bg-green-100' },
  negative: { text: 'text-red-500', bg: 'bg-red-100' },
  neutral: { text: '', bg: '' },
};

export const getColorsClasses = (percent: number | string | undefined) => {
  if (!percent) {
    return colorClasses.neutral;
  }
  return Number(percent) > 0 ? colorClasses.positive : colorClasses.negative;
};
