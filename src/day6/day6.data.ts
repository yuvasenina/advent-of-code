import { parseInput } from '../utils/input'

const example = `Time:      7  15   30
Distance:  9  40  200`

const input = `Time:        48     98     90     83
Distance:   390   1103   1112   1360`

export const dataExample = parseInput(example, '\n') as string[]

export const data = parseInput(input, '\n') as string[]
