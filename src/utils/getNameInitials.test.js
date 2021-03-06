import { getNameInitials } from './getNameInitials';

describe('get name initials', () => {
  it('should return the initial letters of first and last name', () => {
    expect(getNameInitials('John Doe')).toBe('JD');
    expect(getNameInitials('John Lennon Doe')).toBe('JD');
    expect(getNameInitials('John')).toBe('Jo');
    expect(getNameInitials('')).toBe('');
  });
});
