// Сделайте функцию, которая параметром будет принимать массив и удалять из него одинаковые,
//  рядом стоящие элементы.

const arr = ['apple', 'apple', 'samsung', 'samsung', 'phone', 'ipad  mini', 'stels', 'stels', 'stars', 'stars',  'phone', 'apple', 'apple', 'phone',  'phone', 'samsung', 'samsung',];

const fn = () => arr.filter((item, i) => item !== arr[i + 1]);
console.log(fn(arr));
