import { countRecords } from './day6'

export const parseInput = (
  input: string[]
): { time: number, distance: number } => {
  const [timeInput, distanceInput] = input

  const time = timeInput.replaceAll(' ', '').split(':')
  const distance = distanceInput.replaceAll(' ', '').split(':')

  return { time: parseInt(time[1], 10), distance: parseInt(distance[1], 10) }
}

export const day6Part2 = (input: string[]): number => {
  const { time, distance: record } = parseInput(input)
  return countRecords(time, record)
}
