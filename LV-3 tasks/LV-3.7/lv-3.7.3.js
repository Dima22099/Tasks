// Даны два числа. Получите массив общих делителей этих чисел.

const num1 = 33;
const num2 = 40;

const fn = (num1, num2) => {
    let result = [];
    for(let i = 0; i < num1; i += i) {
        num1 % i === 0 ? result.push(i) : '';
    }
    for (let j = 0; j < num2; j += 1) {
        num2 % j === 0 ? result.push(j) : ''; 
    }
    return result;
};
console.log(fn(num1, num2));