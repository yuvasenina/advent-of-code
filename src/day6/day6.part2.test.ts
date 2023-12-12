import { day6Part2 } from './day6.part2'
import { dataExample, data } from './day6.data'
import { logAnswer } from '../utils/logging'

test('get correct answer for example part 1', () => {
  expect(day6Part2(dataExample)).toBe(71503)
})

test('Returns an answer for part 2', () => {
  logAnswer(day6Part2(data))

  expect(typeof day6Part2(data)).toBe('number')
  expect(day6Part2(data)).toBeGreaterThan(0)
})
