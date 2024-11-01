// Сделайте функцию, которая параметром будет 
// принимать массив и элемент и возвращать следующий за ним элемент. Смотрите пример:

const arr = [5, 4, 3, 2, 1];
const num = 4;
// func(arr, 1); // 2
// func(arr, 4); // 5
// func(arr, 5); // 1

const getElement = (arr, num) => num <= arr.length && arr[num];
console.log(getElement(arr, num));