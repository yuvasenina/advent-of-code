import { getMatch } from './day4'

export const countScratchCards = (matches: number[]): number => {
  const scratchCards: number[] = Array(matches.length).fill(1)
  matches.forEach((match, index) => {
    if (match > 0) {
      for (let i = 1; i <= match; i++) {
        if (index + i >= matches.length) break
        scratchCards[index + i] += scratchCards[index]
      }
    }
  })

  return scratchCards.reduce((a, b) => a + b, 0)
}

export const day4Part2 = (input: string[]): number => {
  const values = input.map((m) => getMatch(m))

  return countScratchCards(values)
}
