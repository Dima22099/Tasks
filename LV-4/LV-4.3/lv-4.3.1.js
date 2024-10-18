// Сделайте функцию, которая параметром будет принимать массив и удалять из него все дубли.

const arr = ['apple', 'apple', 'samsung', 'samsung', 'phone', 'ipad  mini', 'phone'];

const fn = (arr) => [...new Set(arr)]
console.log(fn(arr));