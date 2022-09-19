export const key = (prefix: string, n: number): string => `${prefix.split(' ').join('_')}_${n}`

const addSpaces = (input = '', size = 0): string => {
  const d = size - input.length
  return input.length < size ? `${input}${Array(d).fill(' ').join('')}` : input
}

const lineToASCII = (word = ''): number[] => word.split('').map((l) => l.charCodeAt(0))

const ASCIToLine = (arr: number[][]): string[][] =>
  arr.map((line) => line.map((ascii) => String.fromCharCode(ascii)))

export const transformText = (input = '', output = '', steps = 4): string[][] => {
  const size = Math.max(input.length, output.length)
  const normalizedInput = addSpaces(input.toUpperCase(), size)
  const normalizedOutput = addSpaces(output.toUpperCase(), size)

  const result = []
  const original = lineToASCII(normalizedInput)
  const outcome = lineToASCII(normalizedOutput)
  result.push(original)

  for (let step = 0; step < steps; step++) {
    const line = []
    for (let letter = 0; letter < size; letter++) {
      const d = original[letter] - outcome[letter]
      line.push(Math.round(original[letter] - (step * d) / steps))
    }

    result.push(line)
  }

  result.push(outcome)

  return ASCIToLine(result)
}
