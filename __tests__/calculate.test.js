import calculate from '../src/logic/calculate';

describe('Test calculate.js', () => {
  const obj = {
    total: null,
    next: null,
    operation: null,
  };

  it('Return empty object if click on "AC"', () => {
    expect(calculate(obj, 'AC')).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('Add number for the first time', () => {
    expect(calculate(obj, '10').next).toBe('10');
  });

  it('Add the second number ', () => {
    expect(calculate(calculate(obj, '5'), '4').next).toBe('54');
  });

  it('Uses the correct operator', () => {
    expect(calculate(obj, '+').operation).toBe('+');
  });

  it('Uses the correct operator', () => {
    expect(calculate(obj, '-').operation).toBe('-');
  });

  it('Uses the correct operator', () => {
    expect(calculate(obj, 'x').operation).toBe('x');
  });

  it('Uses the correct operator', () => {
    expect(calculate(obj, '÷').operation).toBe('÷');
  });

  it('Return null if the operator is "null"', () => {
    obj.next = 0;
    expect(calculate(obj, 'null').operation).toEqual('null');
  });

  it('Return the opertor if provided', () => {
    obj.next = 0;
    expect(calculate(obj, '-').operation).toEqual('-');
  });

  it('Return empty object', () => {
    obj.next = 2;
    expect(calculate(obj, '-').operation).toEqual('-');
  });

  it('Perform a completed calculation "20 + 6"', () => {
    obj.next = 20;
    expect(calculate(calculate(calculate(calculate(obj, 'null'), '+'), '6'), '=').total).toBe('26');
  });
});
