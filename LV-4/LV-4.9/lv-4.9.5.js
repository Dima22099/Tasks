// Сделайте функцию, которая параметром будет принимать двухмерный массив
//  чисел и возвращать массив максимальных чисел в каждом подмассиве.

const arr = [6, 9, 8, [10, 11, 12]];

const getMaxNumbers = (arr) => {
  const result = [];
  const second = [];
  arr.map(item => {
    if (Array.isArray(item)) {
      second.push(Math.max(...item))
    } else {
      result.push(item)
    }
  })
  return [Math.max(...result), Math.max(...second)];
}
console.log(getMaxNumbers(arr));