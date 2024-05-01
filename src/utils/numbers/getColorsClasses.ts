/**
 * Returns the appropriate color classes based on the input percent value.
 *
 * @param {number | string | undefined} percent - The percent value to evaluate.
 * @returns {object} The color classes for the given percent value.
 */

export const colorClasses = {
  positive: { text: 'text-green-500', bg: 'bg-green-100' },
  negative: { text: 'text-red-500', bg: 'bg-red-100' },
  neutral: { text: '', bg: '' },
};

export const getColorsClasses = (percent: number | string | undefined) => {
  // If percent is falsy, return the neutral color classes
  if (!percent) {
    return colorClasses.neutral;
  }

  // If percent is greater than 0, return the positive color classes; otherwise, return the negative color classes
  return Number(percent) > 0 ? colorClasses.positive : colorClasses.negative;
};
