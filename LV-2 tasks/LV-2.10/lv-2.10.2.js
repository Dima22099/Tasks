// Дано число. Получите первую четную цифру с конца этого числа.
const number = 220899;

const fn = (number) => Number(String(number).split('').reverse().find(num => num % 2 === 0));
console.log(fn(number));

const fn2 = (number) => {
    const num = String(number);
    let result = 0;
    for (let i = num.length; i >= 0; i -= 1) {
        if (num[i] % 2 === 0) {
            result += Number(num[i]);
            return result;
        }
    };
};
console.log(fn2(number));
