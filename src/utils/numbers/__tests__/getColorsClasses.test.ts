import { colorClasses, getColorsClasses } from '../getColorsClasses';

describe('getColorsClasses', () => {
  const testCases = [
    { input: undefined, expected: colorClasses.neutral },
    { input: 1, expected: colorClasses.positive },
    { input: -1, expected: colorClasses.negative },
    { input: -1.5, expected: colorClasses.negative },
    { input: 1.5, expected: colorClasses.positive },
    { input: '1', expected: colorClasses.positive },
    { input: '-1', expected: colorClasses.negative },
    { input: '-1.5', expected: colorClasses.negative },
    { input: '1.5', expected: colorClasses.positive },
  ];

  testCases.forEach(({ input, expected }) => {
    it(`should return ${JSON.stringify(expected)} for input ${input}`, () => {
      expect(getColorsClasses(input)).toEqual(expected);
    });
  });
});
