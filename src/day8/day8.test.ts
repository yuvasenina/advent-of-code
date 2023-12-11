import { day8, parseNode } from './day8'
import { dataExample, dataExample2, data } from './day8.data'
import { logAnswer } from '../utils/logging'

test('should parse nodes', () => {
  expect(parseNode('AAA = (BBB, CCC)')).toEqual([
    'AAA',
    { L: 'BBB', R: 'CCC' }
  ])
})

test('get correct answer for example1 part 1', () => {
  expect(day8(dataExample)).toBe(2)
})
test('get correct answer for example2 part 1', () => {
  expect(day8(dataExample2)).toBe(6)
})

test('Returns an answer for part 1', () => {
  logAnswer(day8(data))

  expect(typeof day8(data)).toBe('number')
  expect(day8(data)).toBeGreaterThan(0)
})
