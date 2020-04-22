import { isOverLength } from './formHandler'

test('isOverLength', () => {
  expect(isOverLength('I like it')).toBe(false)
})