import { Calculator } from '../Calculator'

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
describe('Kata Calculator', () => {
  const calculator = new Calculator()
  const defaultResult = 0

  it('Should return default result if is empty raw input', () => {
    expect(calculator.processRawInputReturnSum('')).toBe(defaultResult)
  })
  it('Should return formated input is a single number in raw input', () => {
    expect(calculator.processRawInputReturnSum('1')).toBe(1)
    expect(calculator.processRawInputReturnSum('2')).toBe(2)
  })
  it('Should return a default result if the raw input is not a number', () => {
    expect(calculator.processRawInputReturnSum('a')).toBe(defaultResult)
    expect(calculator.processRawInputReturnSum('abc')).toBe(defaultResult)
  })
  it('Should return a sum of the raw input numbers', () => {
    expect(calculator.processRawInputReturnSum('1,2')).toBe(3)
    expect(calculator.processRawInputReturnSum('1,2,3')).toBe(6)
    expect(calculator.processRawInputReturnSum('1,2,3,4')).toBe(10)
    expect(calculator.processRawInputReturnSum('1,2,A,4')).toBe(7)
  })
  it('Should sepparate by default the raw input with line break or comma', () => {
    expect(calculator.processRawInputReturnSum('1\n2,3')).toBe(6)
    expect(calculator.processRawInputReturnSum('1\n2\n3')).toBe(6)
    expect(calculator.processRawInputReturnSum('1\n2,a')).toBe(3)
  })
  it('Should sepparate the raw input with custom delimiters', () => {
    expect(calculator.processRawInputReturnSum('//;\n1;2;3;ref')).toBe(6)
    expect(calculator.processRawInputReturnSum('///\n2/3/5')).toBe(10)
    expect(calculator.processRawInputReturnSum('//*\n2*2*2')).toBe(6)
    expect(calculator.processRawInputReturnSum('//|\n2|3|2')).toBe(7)
    expect(calculator.processRawInputReturnSum('//^\n2^2^2')).toBe(6)
  })
  it('Should throw an error if a negative number is found', () => {
    expect(() => calculator.processRawInputReturnSum('-1,2,3')).toThrowError('Negatives not allowed')
    expect(() => calculator.processRawInputReturnSum('-1,2,-3')).toThrowError('Negatives not allowed')
  })
  it('Should ignores numbers over than 1000', () => {
    expect(calculator.processRawInputReturnSum('100,1002,1')).toBe(101)
    expect(calculator.processRawInputReturnSum('1,5,1001')).toBe(6)
  })
  it('Should sepparate the raw input with customs delimiters', () => {
    expect(calculator.processRawInputReturnSum('//[;][,]\n1;2,3')).toBe(6)
    expect(calculator.processRawInputReturnSum('//[*][^]\n2*2^2')).toBe(6)
    expect(calculator.processRawInputReturnSum('//[f][g]\n2f3g2')).toBe(7)
  })
  it('Should sepparate the raw input with custom delimiters of different length', () => {
    expect(calculator.processRawInputReturnSum('//[;;;]\n1;;;2;;;3')).toBe(6)
    expect(calculator.processRawInputReturnSum('//[**][^^]\n2**2^^2')).toBe(6)
    expect(calculator.processRawInputReturnSum('//[ff][g]\n2ff3g2')).toBe(7)
  })
})
