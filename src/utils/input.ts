const getDelimiter = (input: string): string => {
  if (input.includes(',')) {
    return ','
  }
  if (input.includes('\n')) {
    return '\n'
  }
  return ''
}

const mapToNumberIfNecessary = (input: string[]): string[] | number[] => {
  if (input.every((value) => !isNaN(Number(value)))) {
    return input.map((e) => Number(e))
  }
  return input
}

export const parseInput = (input: string, delimeter?: string): string[] | number[] => {
  const inputArray = input.split(delimeter || getDelimiter(input))
  const trimmed = inputArray.map((e) => e.trim())
  return mapToNumberIfNecessary(trimmed)
}
