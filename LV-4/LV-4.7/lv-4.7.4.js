// Сделайте функцию, которая параметром будет 
// принимать массив и элемент и возвращать следующий за ним элемент. Смотрите пример:

const arr = [1, 2, 3, 4, 5];
const num = 3;
// func(arr, 1); // 2
// func(arr, 4); // 5
// func(arr, 5); // 1

const getElement = (arr, num) => arr[num + 1]
console.log(getElement(arr, num));