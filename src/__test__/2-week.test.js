const weekFn = require('../2-week')

test('weekFn function tests', () => {
  expect(weekFn(1)).toBe('Понеділок')
  expect(weekFn(3)).toBe('Середа')
  expect(weekFn(7)).toBe('Неділя')
  expect(weekFn(9)).toBeNull()
  expect(weekFn(1.5)).toBeNull()
  expect(weekFn('2')).toBeNull()
})