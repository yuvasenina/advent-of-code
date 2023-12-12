export const parseInput = (
  input: string[]
): { time: number[], distance: number[] } => {
  const [timeInput, distanceInput] = input

  const time = timeInput
    .split(' ')
    .filter((t) => t !== 'Time:' && t !== '')
    .map((t) => parseInt(t, 10))
  const distance = distanceInput
    .split(' ')
    .filter((t) => t !== 'Distance:' && t !== '')
    .map((t) => parseInt(t, 10))

  return { time, distance }
}

export const getDistance = (holdTime: number, time: number): number => {
  return holdTime * (time - holdTime)
}

export const countRecords = (time: number, record: number): number => {
  const findExtremeTime = (start: number, step: number): number => {
    let distance = 0
    let timeCounter = start

    while (distance <= record) {
      distance = getDistance(timeCounter, time)

      if (distance > record) {
        return timeCounter
      }

      timeCounter += step
    }

    return 0
  }

  const min = findExtremeTime(0, 1)
  const max = findExtremeTime(time, -1)

  return max - min + 1
}

export const day6 = (input: string[]): number => {
  const { time, distance: records } = parseInput(input)
  const winCases = time.map((t, i) => countRecords(t, records[i]))
  return winCases.reduce((acc, curr) => acc * curr, 1)
}
