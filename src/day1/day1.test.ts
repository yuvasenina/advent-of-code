import { logAnswer } from '../utils/logging';
import { day1, day1_2, getCalibrationValue2 } from './day1';
import { data, dataExample, dataExample2 } from './day1.data';


test.each`
    line              | value
    ${'1abc2'}        | ${12}
    ${'pqr3stu8vwx'}  | ${38}
    ${'a1b2c3d4e5f'}  | ${15}
    ${'treb7uchet'}   | ${77}
  `('should should return $value for $line', ({ line, value }) => {
    expect(getCalibrationValue2(line)).toBe(value);
  });


  test.each`
    line                  | value
    ${'two1nine'}         | ${29}
    ${'eightwothree'}     | ${83}
    ${'abcone2threexyz'}  | ${13}
    ${'xtwone3four'}      | ${24}
    ${'4nineeightseven2'} | ${42}
    ${'zoneight234'}      | ${14}
    ${'7pqrstsixteen'}    | ${76}
  `('should return $value when some digits are words in $line ', ({ line, value }) => {
    expect(getCalibrationValue2(line)).toBe(value);
  });


test('get correct answer for example part 1', () => {
  expect(day1(dataExample)).toBe(142);

});
test('Returns an answer for part 1', () => {
  logAnswer(day1(data));

  expect(typeof day1(data)).toBe('number');
  expect(day1(data)).toBeGreaterThan(0);
});

test('get correct answer for example part 2 ', ()=>{
 expect(day1_2(dataExample2)).toBe(281);
})
test('Returns an answer for part 2', () => {
  logAnswer(day1_2(data));

  expect(typeof day1(data)).toBe('number');
  expect(day1(data)).toBeGreaterThan(0);
});
