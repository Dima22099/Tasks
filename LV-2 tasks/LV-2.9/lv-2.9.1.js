// Дано некоторое число:

const number = 312384; 
// Найдите сумму пар цифр этого числа. В нашем случае имеется ввиду следующее:

const fn = (number) => 
    String(number).split("").reduce((acc, num, i, arr) => 
        i % 2 === 0 ? acc += Number(num + arr[i + 1]) : acc, 0);
    console.log(fn(number));

// const fn2 = (number) => {
//     let result = 0;	
// 	    result += String(number).split("").reduce((acc, num, i) => {
//         if (i % 2 !== 0) {
//             acc += Number((num - 1) + num);                   
//         }
//         return acc;
//     }, 0);
// 	return result;
// };
// console.log(fn2(number));
