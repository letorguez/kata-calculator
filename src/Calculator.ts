export class Calculator {
  readonly defaultDelimiter = /[,\n]/;
  private delimiter: RegExp;
  private negativeNumbers = "";

  constructor() {
    this.delimiter = this.defaultDelimiter;
  }

  public processRawInputReturnSum(rawInput: string): number {
    const input = this.processInput(rawInput);
    const [firstNumber, rest] = this.splitFirstNumber(input);
    if (rest === "") return firstNumber;
    return firstNumber + this.processRawInputReturnSum(rest);
  }

  private splitFirstNumber(input: string): [number, string] {
    const firstDelimiter = this.getFirstDelimiterIndex(input);
    if (firstDelimiter === -1) {
      let result = this.parseNumber(input);
      if (this.negativeNumbers !== "") {
        throw `Negatives not allowed: ${this.negativeNumbers}`;
      }
      return [result, ""];
    }
    const firstNumber = this.parseNumber(input.substring(0, firstDelimiter));
    const rest = input.substring(firstDelimiter + 1);
    return [firstNumber, rest];
  }

  private parseNumber(number: string) {
    const parsedNumber = parseInt(number);
    if (isNaN(parsedNumber) || parsedNumber > 1000) {
      return 0;
    }

    if (parsedNumber < 0) {
      if (this.negativeNumbers === "") {
        this.negativeNumbers = `${parsedNumber}`;
      } else {
        this.negativeNumbers += `, ${parsedNumber}`;
      }
    }
    return parsedNumber;
  }

  private getFirstDelimiterIndex(input: string): number {
    return input.search(this.delimiter);
  }

  private processInput(input: string): string {
    const delimiter = input.match(/^\/\/(.*?)\n/);
    if (delimiter) {
      this.delimiter = new RegExp(delimiter[1]);
      console.log(delimiter[1]);
      input = input.substring(input.indexOf("\n") + 1);
    }
    return input;
  }

  // TODO:
  // *"//|\n1|2,3" is invalid and should return the message "'|' expected but ',' found at position 3."

  /*"-1,2" is invalid and should return the message "Negative not allowed : -1"
    "2,-4,-5" is invalid and should return the message "Negative not allowed : -4, -5" 
  */
}
