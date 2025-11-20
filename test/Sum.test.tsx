import { expect, test } from 'vitest'
import { sum } from '../src/helper'

test('adds "1" + 2 to throw TypeError', () => {
  expect(()=> sum("1", 2)).toThrow(TypeError)
})
test('adds "1" + undefined to throw TypeError', () => {
  expect(()=> sum("1", undefined)).toThrow(TypeError)
})

/* Cuando escribes un test que espera un resultado (no una excepción), 
debes pasar el resultado directo al expect() */
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})
test('adds 0 + 12 to equal 12', () => {
  expect(sum(0, 12)).toBe(12)
})