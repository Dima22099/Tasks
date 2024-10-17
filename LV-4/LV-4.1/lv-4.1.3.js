// Сделайте функцию, которая параметром будет принимать секунды, 
// а возвращать количество суток, соответствующих этим секундам.
const seconds = 432000;

const fn = (seconds) => 'Count day: ' + new Date(seconds) / 60 / 60 / 24;
console.log(fn(seconds));
