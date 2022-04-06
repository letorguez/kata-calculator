import { Calculator } from "../Calculator";

/**
 * TODO:
 * * processRawInputReturnSum('') -> 0
 * * processRawInputReturnSum('1') -> 1
 * * processRawInputReturnSum('abc') -> 0
 * * processRawInputReturnSum('1,2,A,4') -> 7
 * * processRawInputReturnSum('1\n2,3') -> 6
 * * processRawInputReturnSum('//;\n1;2;3;ref') -> 6
 * * processRawInputReturnSum('-1,2,3') -> 'Negatives not allowed'
 * * processRawInputReturnSum('100,1002,1') -> 101
 * * processRawInputReturnSum('//[;][,]\n1;2,3') -> 6
 * * processRawInputReturnSum('//[**][^^]\n2**2^^2') -> 6
 */
describe("StringCalculator Should", () => {
  const calculator = new Calculator();
  it("return 0 if given empty string ", () => {
    expect(calculator.processRawInputReturnSum("")).toBe(0);
  });

  it("given a string with only a number return that number", () => {
    expect(calculator.processRawInputReturnSum("1")).toBe(1);
  });

  it("ignore all not integer numbers", () => {
    expect(calculator.processRawInputReturnSum("abc")).toBe(0);
  });

  it("sum the numbers separated by commas", () => {
    expect(calculator.processRawInputReturnSum("1,2")).toBe(3);
    expect(calculator.processRawInputReturnSum("1,2,5")).toBe(8);
    expect(calculator.processRawInputReturnSum("1,2,a")).toBe(3);
  });

  it("sum the numbers separated by new lines and commas", () => {
    expect(calculator.processRawInputReturnSum("1\n2")).toBe(3);
    expect(calculator.processRawInputReturnSum("1\n2,3")).toBe(6);
    expect(calculator.processRawInputReturnSum("1,2\n3,4")).toBe(10);
  });
});
