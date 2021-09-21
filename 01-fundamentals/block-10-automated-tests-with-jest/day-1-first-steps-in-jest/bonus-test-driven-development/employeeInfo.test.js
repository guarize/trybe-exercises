const employeeInfo = require('./employeeInfo');

describe('employeeInfo tests', () => {
  it('employeeInfo is a function', () => {
    expect(typeof employeeInfo).toBe('function');
  });

  it('Tests if employeeInfo(id, "firstName") returns employees firstname', () => {
    expect(employeeInfo('4456-4', 'firstName')).toBe('Leila');
  });

  it('Tests if employeeInfo(id, "lastName") returns employees lastname', () => {
    expect(employeeInfo('1256-4', 'lastName')).toBe('Bezos');
  });

  it('Tests if employeeInfo(id, "specialities") returns employees specialities', () => {
    expect(employeeInfo('9852-2-2', 'specialities')).toEqual(['Ruby', 'SQL']);
  });

  it('Tests if function throws "ID not identified" when no ID is found', () => {
    expect(() => { employeeInfo('23151', 'lastName') }).toThrowError(
      new Error('ID not identified')
    );
  });

  it('Tests if function throws "Information unavailable" when no ID is found', () => {
    expect(() => { employeeInfo('9852-2-2', 'favoriteFood') }).toThrowError(
      new Error('Information unavailable')
    );
  });
});
