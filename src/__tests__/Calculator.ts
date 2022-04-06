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
describe('StringCalculator Should', () => {
  const calculator = new Calculator()
  it('given empty string return 0', () => {
    expect(calculator.processRawInputReturnSum('')).toBe(0)
  })
})
