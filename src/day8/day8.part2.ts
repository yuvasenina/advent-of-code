import { generateNodeMap } from './day8'
import { lcm } from '../utils/math'

const findMinWay = (instruction: string, node: string, map: any): number => {
  let steps = 0
  let currentNode = node
  while (!currentNode.endsWith('Z')) {
    const newNode =
            map[currentNode][instruction[steps % instruction.length]]
    currentNode = newNode
    steps++
  }
  return steps
}

export const day8Part2 = (input: string[]): number => {
  const [instructions, nodes] = input
  const nodeMap = generateNodeMap(nodes)

  const startNodes = Object.keys(nodeMap).filter((node) =>
    node.endsWith('A')
  )

  const minWays = startNodes.map((node) =>
    findMinWay(instructions, node, generateNodeMap(nodes))
  )

  return lcm(minWays)
}
