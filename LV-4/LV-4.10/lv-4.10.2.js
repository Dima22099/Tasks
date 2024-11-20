// Сделайте функцию, которая параметром будет принимать массив и перемешивать 
// элементы этого массива в случайном порядке.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const sortFunc = (arr) => {
    for (let i = arr.length - 1; i > 0; i -= 1) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
};
console.log(sortFunc(arr));