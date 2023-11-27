export function sum(a, b) {
  return a + b;
}

export function trungbinh(arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((total, item) => total + item, 0) / arr.length;
}
