import { getValueByMap, day5 } from './day5'
import { dataExample, data } from './day5.data'
import { logAnswer } from '../utils/logging'

test.each`
    map                                                  | value   |result
    ${['50 98 2', '52 50 48']}                          | ${1}    |${1}
    ${['50 98 2', '52 50 48']}                          | ${51}   |${53}
    ${['50 98 2', '52 50 48']}                          | ${98}   |${50}

  `('seed-to-soil should return $result for $value', ({ map, value, result }) => {
  expect(getValueByMap(map, value)).toBe(result)
})

test('get correct answer for example part 1', () => {
  expect(day5(dataExample)).toBe(35)
})

test('Returns an answer for part 1', () => {
  logAnswer(day5(data))

  expect(typeof day5(data)).toBe('number')
  expect(day5(data)).toBeGreaterThan(0)
})
