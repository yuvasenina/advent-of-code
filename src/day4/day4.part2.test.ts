import { logAnswer } from '../utils/logging'

import { data, dataExample } from './day4.data'
import { day4Part2 } from './day4.part2'

test('get correct answer for example part 2', () => {
  expect(day4Part2(dataExample)).toBe(30)
})
test('Returns an answer for part 2', () => {
  logAnswer(day4Part2(data))

  expect(typeof day4Part2(data)).toBe('number')
  expect(day4Part2(data)).toBeGreaterThan(0)
})
