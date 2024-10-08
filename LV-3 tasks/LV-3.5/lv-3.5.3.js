// Дан массив с числами. Оставьте в нем только те числа, которые содержат цифру ноль.

const arr = [20, 23, 25, 30, 33, 34, 43, 50, 15, 80, 90];

const fn2 = (arr) => arr.filter(el => String(el).indexOf(0) > -1);
console.log(fn2(arr));

// const fn = (arr) => {
//     const result = [];
//           arr.map((el) => {
//         if (String(el).indexOf(0) > -1) {
//             result.push(el);
//         }
//     })
//     return result;
// };
// console.log(fn(arr));


