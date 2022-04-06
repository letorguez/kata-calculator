export class Calculator {
  public processRawInputReturnSum(rawInput: string): number {
    let result = 0;
    const parsedNumber = parseInt(rawInput);
    if (!isNaN(parsedNumber)) {
      result += parsedNumber;
    }
    return result;
  }
}
