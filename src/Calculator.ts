export class Calculator {
  readonly defaultDelimiter = /[,\n]/;
  private delimiter: RegExp;
  private negativeNumbers: number[] = [];

  constructor() {
    this.delimiter = this.defaultDelimiter;
  }

  public processRawInputReturnSum(rawInput: string): number {
    if (this.containsCustomDelimiters(rawInput)) {
      rawInput = rawInput.substring(rawInput.indexOf("\n") + 1);
    }
    const [firstNumber, rest] = this.splitFirstNumber(rawInput);
    if (rest === "") {
      if (this.negativeNumbers.length !== 0) {
        throw new Error(`Negatives not allowed: ${this.negativeNumbers.join(", ")}`);
      }
      return firstNumber;
    }
    return firstNumber + this.processRawInputReturnSum(rest);
  }

  private splitFirstNumber(input: string): [number, string] {
    const firstDelimiter = this.getFirstDelimiterIndex(input);
    if (firstDelimiter === -1) {
      let result = this.parseNumber(input);
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
      this.negativeNumbers.push(parsedNumber);
    }
    return parsedNumber;
  }

  private getFirstDelimiterIndex(input: string): number {
    return input.search(this.delimiter);
  }

  private containsCustomDelimiters(input: string): boolean {
    let result = false;
    const delimiter = input.match(/^\/\/(.*?)\n/);
    if (delimiter) {
      this.processDelimiter(delimiter[1]);
      result = true;
    }
    return result;
  }

  private processDelimiter(delimiter: string): void {
    const regexContainerSeparator = /[\[\]]/;
    const wellFormedDelimiters = this.escapeRegExp(
      delimiter.split(regexContainerSeparator).join("")
    );
    this.delimiter = new RegExp(`[${wellFormedDelimiters}]`);
  }

  private escapeRegExp(delimiters: string) {
    return delimiters.replace(/[.*+\-?^${}()|\\]/g, "\\$&");
  }
}
