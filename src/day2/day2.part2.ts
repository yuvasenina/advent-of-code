import { parseGame } from './day2'

export const getGamePower = (line: string): number => {
  const { maxCubes } = parseGame(line)

  return maxCubes.red * maxCubes.green * maxCubes.blue
}

export const day2Part2 = (input: string[]): number => {
  const values = input.map((m) => getGamePower(m))
  return values.reduce((a, b) => a + b, 0)
}
