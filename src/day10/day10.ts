export interface Point {
  x: number
  y: number
}
interface Position {
  prev: Point
  cur: Point
}

export const findStartPosition = (input: string[]): Point | null => {
  for (let index = 0; index < input.length; index++) {
    const line = input[index]
    if (line.includes('S')) {
      return { x: line.indexOf('S'), y: index }
    }
  }
  return null
}

export const getDirections = (
  input: string[],
  { x: startX, y: startY }: Point
): Point[] => {
  const DIRECTIONS: Record<string, { x: number, y: number }> = {
    UP: { x: 0, y: -1 },
    DOWN: { x: 0, y: 1 },
    LEFT: { x: -1, y: 0 },
    RIGHT: { x: 1, y: 0 }
  }

  const possibleSteps: Record<string, string[]> = {
    UP: ['7', '|', 'F'],
    DOWN: ['L', '|', 'J'],
    LEFT: ['-', 'L', 'F'],
    RIGHT: ['-', '7', 'J']
  }

  const ways = []

  for (const direction in DIRECTIONS) {
    const { x: offsetX, y: offsetY } = DIRECTIONS[direction]
    const nextX = startX + offsetX
    const nextY = startY + offsetY

    if (
      nextX >= 0 &&
            nextX < input[0].length &&
            nextY >= 0 &&
            nextY < input.length
    ) {
      const nextStep = input[nextY][nextX]
      if (possibleSteps[direction].includes(nextStep)) {
        ways.push({ x: nextX, y: nextY })
      }
    }
  }
  console.log('ways', ways)

  return ways
}

const isPointsEqual = (a: Point, b: Point): boolean => {
  return a.x === b.x && a.y === b.y
}

const nextStep = (point: Position, input: string[]): Position => {
  const direction = input[point.cur.y][point.cur.x]

  const changeX = (point: Point, step: number): number => {
    return point.x + step
  }
  const changeY = (point: Point, step: number): number => {
    return point.y + step
  }

  const newPoint = { ...point.cur }

  switch (direction) {
    case '|':
      newPoint.y = changeY(
        point.cur,
        point.prev.y < point.cur.y ? 1 : -1
      )

      break
    case '-':
      newPoint.x = changeX(
        point.cur,
        point.prev.x < point.cur.x ? 1 : -1
      )

      break
    case 'L':
      if (point.prev.x > point.cur.x) {
        newPoint.y = changeY(point.cur, -1)
      } else if (point.prev.y < point.cur.y) {
        newPoint.x = changeX(point.cur, 1)
      }
      break

    case 'F':
      if (point.prev.y > point.cur.y) {
        newPoint.x = changeX(point.cur, 1)
      } else if (point.prev.x > point.cur.x) {
        newPoint.y = changeY(point.cur, 1)
      }

      break
    case 'J':
      if (point.prev.x < point.cur.x) {
        newPoint.y = changeY(point.cur, -1)
      } else if (point.prev.y < point.cur.y) {
        newPoint.x = changeX(point.cur, -1)
      }

      break
    case '7':
      if (point.prev.x < point.cur.x) {
        newPoint.y = changeY(point.cur, 1)
      } else if (point.prev.y > point.cur.y) {
        newPoint.x = changeX(point.cur, -1)
      }

      break
    default:
      break
  }
  return { cur: newPoint, prev: point.cur }
}

export const countSteps = (input: string[]): number => {
  const startPosition = findStartPosition(input) as Point

  const points = getDirections(input, startPosition)

  let directions = {
    left: { prev: startPosition, cur: points[0] },
    right: { prev: startPosition, cur: points[1] }
  }
  let count = 1

  while (!isPointsEqual(directions.left.cur, directions.right.cur)) {
    const left = nextStep(directions.left, input)
    const right = nextStep(directions.right, input)
    directions = { left, right }
    count++
  }
  return count
}

export const day10 = (input: string[]): number => {
  return countSteps(input)
}
