// Дано некоторое число:

// 12345
// Получите массив цифр этого числа.

const number = 12345;

const fn = (number) => {
    const numberStr = String(number);
    const arr = [];
    for (let i = 0; i < numberStr.length; i ++) {
        arr.push(numberStr[i]);
    }
    return arr;
};

console.log(fn(number));