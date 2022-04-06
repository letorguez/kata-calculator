export class Calculator {
  public processRawInputReturnSum(rawInput: string): number {
    const firstDelimiter = rawInput.indexOf(",");
    if(firstDelimiter === -1) {
      const parsedNumber = parseInt(rawInput);
      if (isNaN(parsedNumber)) return 0;
      return parsedNumber;
    }
    const firstNumber = rawInput.substring(0, firstDelimiter);
    const parsedNumber = parseInt(firstNumber);
    if (isNaN(parsedNumber)) return 0;
    return (
      parsedNumber +
      this.processRawInputReturnSum(rawInput.substring(firstDelimiter + 1))
    );
   
  }
}
