// Сделайте функцию, которая параметром будет принимать массив и 
// возвращать случайный элемент этого массива.

const arr = [1, 98, 2, 34, 1, 23, 3, 4,2323,  5, 654, 6, 3535, 7, 8, 9,0];

const getRandomElement = (arr) => Math.round(Math.random() * (arr.length - 1));
console.log(getRandomElement(arr));
// ты часто создаёшь такой массив упарядочный, 
// который потом тебе сбивает с правильно пути)

// мы создавали во время созвона функцию, получения рандомного числа в
//  диапозоне – вот ей нужно пользоваться