// Сделайте функцию, которая параметром будет принимать массив 
// и удалять из него все дубли, которые встречаются больше трех раз.

const arr = ['apple', 'apple', 'samsung', 'samsung', 'phone', 'ipad  mini', 'stels', 'stels', 'stars', 'stars',  'phone', 'apple', 'apple', 'phone',  'phone', 'samsung', 'samsung',];

const fn = (arr) => {
  const result = {};
  arr.forEach(el => {
    result[el] = (result[el] || 0)  + 1;
  });
  return arr.filter(item => result[item] <= 3);
}
console.log(fn(arr));  