export const logAnswer = (answer: any): void => {
  process.stdout.write(`\n\n-----------------
Answer: ${answer}
-----------------\n\n`)
}

export const log = (...args: any[]): void => {
  process.stdout.write(`${args.join(', ')}\n\n`)
}
