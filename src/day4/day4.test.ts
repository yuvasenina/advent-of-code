import { logAnswer } from '../utils/logging'
import { getMatch, day4 } from './day4'
import { data, dataExample } from './day4.data'

test.each`
    line                                                       | value
    ${'Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53'}      | ${4}
    ${'Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19'}      | ${2}
    ${'Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1'}      | ${2}
    ${'Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83'}      | ${1}
    ${'Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36'}      | ${0}
    ${'Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11'}      | ${0}


  `('should should return $value points for $line', ({ line, value }) => {
  expect(getMatch(line)).toBe(value)
})

test('get correct answer for example part 1', () => {
  expect(day4(dataExample)).toBe(13)
})
test('Returns an answer for part 1', () => {
  logAnswer(day4(data))

  expect(typeof day4(data)).toBe('number')
  expect(day4(data)).toBeGreaterThan(0)
})
