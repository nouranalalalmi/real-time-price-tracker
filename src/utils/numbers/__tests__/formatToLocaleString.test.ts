import { formatToLocaleString } from '../formatToLocaleString';

describe('formatToLocaleString', () => {
  it('should format a number to a string with two decimal places', () => {
    expect(formatToLocaleString(1234.5678)).toBe('1,234.57');
  });

  it('should format a number to a string with two decimal places', () => {
    expect(formatToLocaleString(1234.5678)).toBe('1,234.57');
  });

  it('should return "-" for NaN values', () => {
    expect(formatToLocaleString(NaN)).toBe('-');
  });

  it('should return "-" for undefined values', () => {
    expect(formatToLocaleString(undefined)).toBe('-');
  });

  it('should return "-" for zero values', () => {
    expect(formatToLocaleString(0)).toBe('0.00');
  });
});
