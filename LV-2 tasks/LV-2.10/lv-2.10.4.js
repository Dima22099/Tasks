// Дан массив с числами:
const arr = [1, 2, 3, 4, 4, 5];
// Проверьте, что в этом массиве есть два одинаковых элемента подряд.

const fn = (arr) => Boolean(arr.reduce((acc, el, i) => el === arr[i +1] ? acc += 1 : acc += 0, 0));
console.log(fn(arr));

// const fn = (arr) => 
// 	Boolean(arr.reduce((acc, el, i) => {
//         if (el === arr[i +1]) {
//             acc += 1;
//         }
// 		return acc;
//     }, 0));
//     console.log(fn(arr));