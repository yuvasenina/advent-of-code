import { getDistance, parseInput, day6 } from './day6'
import { dataExample, data } from './day6.data'
import { logAnswer } from '../utils/logging'

test.each`
    holdTime | distance
    ${0}     | ${0}
    ${1}     | ${6}
    ${2}     | ${10}
    ${3}     | ${12}
    ${4}     | ${12}
    ${5}     | ${10}
    ${6}     | ${6}
    ${7}     | ${0}
`(
  'should return distance $distance mm for $holdTime ms',
  ({ holdTime, distance }) => {
    expect(getDistance(holdTime, 7)).toBe(distance)
  }
)

test('parse data and return object with time and distance', () => {
  expect(parseInput(dataExample)).toEqual({
    time: [7, 15, 30],
    distance: [9, 40, 200]
  })
})

test('get correct answer for example part 1', () => {
  expect(day6(dataExample)).toBe(288)
})

test('Returns an answer for part 1', () => {
  logAnswer(day6(data))

  expect(typeof day6(data)).toBe('number')
  expect(day6(data)).toBeGreaterThan(0)
})
