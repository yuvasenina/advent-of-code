import { day8Part2 } from './day8.part2'
import { dataExample3, data } from './day8.data'
import { logAnswer } from '../utils/logging'

test('get correct answer for example1 part 1', () => {
  expect(day8Part2(dataExample3)).toBe(6)
})

test('Returns an answer for part 2', () => {
  logAnswer(day8Part2(data))

  expect(typeof day8Part2(data)).toBe('number')
  expect(day8Part2(data)).toBeGreaterThan(0)
})
