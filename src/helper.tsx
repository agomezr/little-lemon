export function sum(a:number, b:number) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError("Parameters must be numbers")
  }
  return a + b
}