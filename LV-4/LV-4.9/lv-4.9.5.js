// Сделайте функцию, которая параметром будет принимать секунды,
//  а возвращать количество дней, часов, минут и секунд, соответствующих 
// этим секундам, в виде следующего объекта:

// {
// 	d: 12,
// 	h: 10,
// 	m: 59,
// 	s: 59,
// }

// const seconds = 376276247;

// const getDate = (seconds) => {
//     const  date = new Date(seconds);
//   // const {_, __, d, h, m, s,} = date;
//   const d = date.getDate();
//   const h = date.getHours();
//   const m = date.getMinutes();
//   const s = date.getSeconds();
//     return {d, h, m, s};
// };
// console.log(getDate(seconds));


// Сделайте функцию, которая параметром будет принимать двухмерный массив
//  чисел и возвращать массив максимальных чисел в каждом подмассиве.

const arr = [6, 8, 9, [10, 11, 12]];

const getMaxNumbers = (arr) => {
  const result = [];
  const first = [];
  const second = [];
  for (const item of arr) {
    if (item === !Number.isNaN(item)) {
      first.push(item);
    }
    second = item;
  }
  result.push(Math.max(first));
  result.push(Math.max(second));
  return result;
};
console.log(getMaxNumbers(arr));