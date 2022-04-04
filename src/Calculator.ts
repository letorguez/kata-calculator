export class Calculator {
  public processRawInputReturnSum (rawInput: string): number {
    const input: number[] = this.processRawInput(rawInput)
    return this.sum(input)
  }

  private processRawInput (rawInput: string): number[] {
    const [delimiter, input] = this.processDelimiter(rawInput)
    const inputCol = input.split(delimiter)
    return inputCol
      .map(element => parseInt(element))
      .filter(element => !isNaN(element))
  }

  private sum (input: number[]): number {
    const defaultValue = 0
    if (input.some(element => element < 0)) {
      throw new Error('Negatives not allowed')
    }
    return input.reduce((accumulator, currentValue) => {
      if (currentValue <= 1000) {
        accumulator += currentValue
      }
      return accumulator
    }, defaultValue)
  }

  private processDelimiter (rawInput: string): [string|RegExp, string] {
    let delimiter: string|RegExp = /[,\n]/
    if (rawInput.startsWith('//')) {
      delimiter = rawInput.substring(2, rawInput.indexOf('\n'))
      if (delimiter.includes('[')) {
        let delimiters: string[] = delimiter.split('[')
        delimiters = delimiters.map(element => element.replace(']', ''))
        delimiter = new RegExp(`[${delimiters.join('')}]`)
      }
      rawInput = rawInput.slice(rawInput.indexOf('\n'))
    }
    return [delimiter, rawInput]
  }
}
