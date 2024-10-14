// Дан массив. Сделайте так, чтобы в нем каждый элемент повторился два раза.

const arr = ['apple', 'samsung', 'xiaomi', 'tehno'];

const fn = (arr) => arr.reduce((acc, el, i) => {
  acc.push(el, arr[i])
  return acc;
}, [])
console.log(fn(arr));