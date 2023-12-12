const gcd = (a: number, b: number): number => {
  return b === 0 ? a : gcd(b, a % b)
}

export const lcm = (numbers: number[]): number => {
  if (numbers.length === 0) {
    throw new Error('Array must not be empty')
  }

  let result = numbers[0]

  for (let i = 1; i < numbers.length; i++) {
    result = (result * numbers[i]) / gcd(result, numbers[i])
  }

  return result
}
