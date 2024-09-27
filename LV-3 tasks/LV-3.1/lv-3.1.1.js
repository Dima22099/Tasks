// Дано некоторое число. Проверьте, что цифры этого числа расположены по возрастанию.

// const number = 4523;
const number = 456;

const fn2 = (number) => {
    const strNumber = String(number);
    let temp = 0;

    for (let i = 0; i < strNumber.length - 1; i += 1) {
        if (Number(strNumber[i + 1] - Number(strNumber[i]))  === 1) {
            temp = Number(strNumber[i]);
        } else {
            return false;
        }
    }
    return true;
};
console.log(fn2(number));