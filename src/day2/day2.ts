export type Color = 'red' | 'green' | 'blue'
type Game = Record<Color, number>

const gameSettings: Record<Color, number> = {
  red: 12,
  green: 13,
  blue: 14
}

const isGamePossible = (cubes: Game): boolean => {
  return Object.keys(cubes).every(key => cubes[key as Color] <= gameSettings[key as Color])
}
const extractGameId = (game: string): number => {
  const match = game.match(/\d+/)
  return (match !== null) ? parseInt(match[0], 10) : 0
}

export const parseGame = (line: string): { id: number, maxCubes: Game } => {
  const [gameLabel, games] = line.split(':').map(part => part.trim())
  const cubes: Game = { red: 0, blue: 0, green: 0 }

  const gameRounds = games.split(';')

  gameRounds.forEach(round => {
    round.split(',').forEach(colorPair => {
      const [value, color] = colorPair.trim().split(' ')
      cubes[color as Color] = Math.max(cubes[color as Color], Number(value))
    })
  })

  return { id: extractGameId(gameLabel), maxCubes: cubes }
}

export const getGameValue = (line: string): number => {
  const { id, maxCubes } = parseGame(line)
  return isGamePossible(maxCubes) ? id : 0
}

export const day2 = (input: string[]): number => {
  const values = input.map((m) => getGameValue(m))
  return values.reduce((a, b) => a + b, 0)
}
