// Дано некоторое число:

// 12345
// Найдите сумму цифр этого числа.

const number = 12345;

const fn = (number) => {
    let sum = 0;
    const numberStr = String(number);
    for (let i = 0; i < numberStr.length; i += 1) {
        sum += Number(numberStr[i]);
    }
    return sum;
};

console.log(fn(number));