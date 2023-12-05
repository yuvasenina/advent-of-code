import { logAnswer } from '../utils/logging'
import { day2, getGameValue, parseGame } from './day2'
import { data, dataExample } from './day2.data'

test.each`
    line                                                                            | value
    ${'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green'}                     | ${1}
    ${'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue'}           | ${2}
    ${'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red'}   | ${0}
    ${'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red'}   | ${0}
    ${'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green'}                     | ${5}
  `('should should return $value for $line', ({ line, value }) => {
  expect(getGameValue(line)).toBe(value)
})

test.each`
    line                                                                            | value
    ${'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green'}                     | ${{ id: 1, maxCubes: { blue: 6, red: 4, green: 2 } }}

  `('parseGame should return game structure with max number of cubes for $line', ({ line, value }) => {
  expect(parseGame(line).id).toBe(value.id)
  expect(parseGame(line).maxCubes).toEqual(value.maxCubes)
})

test('get correct answer for example part 1', () => {
  expect(day2(dataExample)).toBe(8)
})
test('Returns an answer for part 1', () => {
  logAnswer(day2(data))

  expect(typeof day2(data)).toBe('number')
  expect(day2(data)).toBeGreaterThan(0)
})
