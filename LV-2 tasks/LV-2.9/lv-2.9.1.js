// Дано некоторое число:

const number = 123456;
// Найдите сумму пар цифр этого числа. В нашем случае имеется ввиду следующее:

// 12 + 34 + 56 = // 102

const fn = (number) => 
    String(number).split("").reduce((acc, num, i) => 
        i % 2 !== 0 ? acc+= Number(num -1 + num) : acc + 0, 0);
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
