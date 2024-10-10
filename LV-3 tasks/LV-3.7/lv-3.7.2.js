// Дано число. Получите массив делителей этого числа.

const number = 120;

const fn = (number) => {
    const result = [];
    for (let i = 2; i < number; i += 1) {
        if (number % i === 0) {
            result.push(i);
        }
    }
    return result;
};
console.log(fn(number));
