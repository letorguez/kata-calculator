export class Calculator {
  public processRawInputReturnSum (rawInput: string): number {
    let result = 0
    if (!isNaN(parseInt(rawInput))) {
      result += parseInt(rawInput)
    }
    return result
  }
}
