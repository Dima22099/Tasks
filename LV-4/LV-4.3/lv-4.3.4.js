// Сделайте функцию, которая параметром будет принимать массив 
// с числами и возвращать максимальное и минимальное значение из этого массива 
// в виде следующего объекта:

// {
// 	max: 9,
// 	min: 1,
// }

const arr = [8, 9, 1, 12, 212, 23, 45, 56,];

const fn = (arr) => {
    let result = {
        max: arr[0],
        min: arr[0],
};
    arr.forEach(item => {
        if (result.min > item) {
            result.min = item;
        } else if (result.max < item) {
            result.max = item;
        }
    })
  return result;
}
console.log(fn(arr));