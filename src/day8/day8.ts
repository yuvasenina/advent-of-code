export const parseNode = (node: string): any => {
  const [element, left, right] = node
    .replace(' = (', ', ')
    .replace(')', '')
    .split(', ')
  return [element, { L: left, R: right }]
}

const followInstructions = (instructions: string, nodes: any[]): number => {
  let stepsCount = 0
  let element: string = 'AAA'
  while (element !== 'ZZZ') {
    const stepInstruction = instructions[stepsCount % instructions.length]

    const node = nodes[element][stepInstruction]

    element = node

    stepsCount++
  }

  return stepsCount
}

export const generateNodeMap = (nodes: string) => {
  const parsedNodes = nodes.split('\n').map((node) => parseNode(node))
  const nodeMap = parsedNodes.reduce((acc, [id, node]) => {
    acc[id] = node
    return acc
  }, {})
  return nodeMap
}

export const day8 = (input: string[]): number => {
  const [instructions, nodes] = input

  return followInstructions(instructions, generateNodeMap(nodes))
}
