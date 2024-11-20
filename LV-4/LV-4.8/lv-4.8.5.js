// Сделайте функцию, которая параметрами будет принимать любое количество чисел, а возвращать их сумму.

const getSumElement = (...num) => num.reduce((acc, item) => acc + item, 0);
console.log(getSumElement(2, 3, 4, 5, 6, 7, 8, 10, 5));