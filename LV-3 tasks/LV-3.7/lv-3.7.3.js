// Даны два числа. Получите массив общих делителей этих чисел.

const num1 = 15;
const num2 = 40;

const fn = (num1, num2) => {
    let result = [];
    const whichOneIsShorter = num1 < num2 ? num1 : num2;

    for(let i = 0; i < whichOneIsShorter; i += 1) {
        (num1 % i === 0 && num2 % i === 0) && result.push(i);
    }
    return result;
};
console.log(fn(num1, num2));