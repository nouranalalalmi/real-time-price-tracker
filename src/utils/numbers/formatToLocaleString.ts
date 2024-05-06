/**
 * Formats a value to a locale string with two decimal places.
 *
 * @param {number | string | undefined} value - The value to format.
 * @returns {string} The formatted string.
 */

export const formatToLocaleString = (value: number | string | undefined): string => {
  // If the value is empty or cannot be converted to a number, return '-'
  if (value === '' || isNaN(Number(value))) {
    return '-';
  }
  // Convert the value to a number and format it as a locale string with two decimal places
  return Number(value).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
