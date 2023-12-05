import { logAnswer } from '../utils/logging'

import { data, dataExample } from './day2.data'

import { getGamePower, day2Part2 } from './day2.part2'

test.each`
    line                                                                            | value
    ${'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green'}                     | ${48}
    ${'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue'}           | ${12}
    ${'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red'}   | ${1560}
    ${'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red'}   | ${630}
    ${'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green'}                     | ${36}
  `('should should return $value for $line', ({ line, value }) => {
  expect(getGamePower(line)).toBe(value)
})

test('get correct answer for example part 2', () => {
  expect(day2Part2(dataExample)).toBe(2286)
})
test('Returns an answer for part 2', () => {
  logAnswer(day2Part2(data))

  expect(typeof day2Part2(data)).toBe('number')
  expect(day2Part2(data)).toBeGreaterThan(0)
})
