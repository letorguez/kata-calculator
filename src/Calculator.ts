export class Calculator {
  public processRawInputReturnSum(rawInput: string): number {
    const [firstNumber, rest] = this.splitFirstNumber(rawInput);
    if (rest === "") return firstNumber;
    return firstNumber + this.processRawInputReturnSum(rest);
  }

  private splitFirstNumber(input: string): [number, string] {
    const delimiter = /,|\n/;
    const firstDelimiter = input.search(delimiter);
    if(firstDelimiter === -1) {
      let result = this.parseNumber(input);
      return [result, ""];
    }
    const firstNumber = this.parseNumber(input.substring(0, firstDelimiter));
    const rest = input.substring(firstDelimiter + 1);
    return [firstNumber, rest];
  }

  private parseNumber (number: string){
    const parsedNumber = parseInt(number);
    if (isNaN(parsedNumber)) return 0;
    return parsedNumber;
  }

}
