const doubleNTimes = (n: number): number => {
  return 2 ** (n - 1)
}

const getIntersectionCount = (array1: number[], array2: number[]): number => array1.filter(value => array2.includes(value)).length

export const getMatch = (line: string): number => {
  const [, numbers] = line.split(':').map(part => part.trim())
  const [win, nums] = numbers.replaceAll('  ', ' ').split('|').map(part => part.trim().split(' ').map(n => Number(n)))

  return getIntersectionCount(win, nums)
}

const getPoints = (line: string): number => {
  const match = getMatch(line)
  return match > 0 ? doubleNTimes(match) : 0
}

export const day4 = (input: string[]): number => {
  const values = input.map((m) => getPoints(m))
  return values.reduce((a, b) => a + b, 0)
}
