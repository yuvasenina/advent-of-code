export const parseInput = (input: string[]): { seeds: number[], maps: string[][] } => {
  const [seedsInput, ...mapsInput] = input

  const seeds = seedsInput.replace('seeds: ', '').split(' ').map(num => Number(num))
  const maps = mapsInput.map(line => line.split('\n')).map(map => map.filter(line => !isNaN(Number(line[0]))))

  return { seeds, maps }
}

export const getValueByMap = (map: string[], initValue: number): number => {
  const mapLines = map.map(line => line.split(' ').map(num => Number(num)))

  let result = initValue
  mapLines.forEach(line => {
    const [destination, source, length] = line
    if (initValue >= source && initValue <= source + length - 1) {
      result = destination + (initValue - source)
    }
  })
  return result
}

export const getLocationNumberBySeed = (seed: number, maps: string[][]): number => {
  let result = seed
  maps.forEach(map => {
    result = getValueByMap(map, result)
  })
  return result
}

export const day5 = (input: string[]): number => {
  const { seeds, maps } = parseInput(input)

  return Math.min(...seeds.map(seed => getLocationNumberBySeed(seed, maps)))
}
