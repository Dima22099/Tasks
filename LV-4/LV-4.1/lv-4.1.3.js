// Сделайте функцию, которая параметром будет принимать секунды, 
// а возвращать количество суток, соответствующих этим секундам.
const seconds = 432000;

const fn = (seconds) => new Date(seconds);
console.log(fn(seconds));
