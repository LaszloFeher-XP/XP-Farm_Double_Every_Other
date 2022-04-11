const { Kata } = require('../src/kata');

describe('First story', () => {
  test('GIVEN [1,2,3,4] WHEN logic THEN returns [1,4,3,8]', () => {
    const kata = new Kata();
    expect(kata.doubleEveryOther([1, 2, 3, 4])).toStrictEqual([1, 4, 3, 8]);
  });
});




