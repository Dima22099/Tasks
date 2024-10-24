// Сделайте функцию, которая параметром будет принимать массив и 
// возвращать случайный элемент этого массива.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,0];

const getRandomElement = (arr) => Math.round(Math.random() * (arr.length - 1));
console.log(getRandomElement(arr));