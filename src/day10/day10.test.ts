import { logAnswer } from '../utils/logging'
import { day10, findStartPosition, getDirections } from './day10'
import { data, dataExample, dataExample2 } from './day10.data'

test('findStartPosition returns correct start', () => {
  expect(findStartPosition(dataExample)).toEqual({ x: 1, y: 1 })
})
test('findStartPosition returns correct start', () => {
  expect(findStartPosition(dataExample2)).toEqual({ x: 0, y: 2 })
})

test('getDirections returns correct directions', () => {
  expect(getDirections(dataExample, { x: 1, y: 1 })).toEqual([
    { x: 1, y: 2 },
    { x: 2, y: 1 }
  ])
})

test('get correct answer for example ', () => {
  expect(day10(dataExample)).toBe(4)
})
test('get correct answer for example2 ', () => {
  expect(day10(dataExample2)).toBe(8)
})

test('Returns an answer for part 1', () => {
  logAnswer(day10(data))

  expect(typeof day10(data)).toBe('number')
  expect(day10(data)).toBeGreaterThan(0)
})
