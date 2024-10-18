// Сделайте функцию, которая параметром будет принимать массив 
// с числами и возвращать максимальное и минимальное значение из этого массива 
// в виде следующего объекта:

// {
// 	max: 9,
// 	min: 1,
// }

const arr = [8, 9, 12, 212, 23, 45, 56,];

const fn = (arr) => {
    let result = {};
  arr.forEach((item, i, arrNum) => {
    if (item < arr[i + 1]) {
      result.min = item;
    } else if (item > arrNum[i + 1]) {
      result.max = item;
    }
  })
  return result;
}
console.log(fn(arr));// не доделал еще