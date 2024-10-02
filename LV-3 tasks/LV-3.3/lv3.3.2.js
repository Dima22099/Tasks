// Дано некоторое число:

const number = 1357;
// Проверьте, что все цифры этого числа являются нечетными.

const fn = (number) => {
    let result = true;
    const numStr = String(number);
    for (let i = 0; i < numStr.length; i += 1) {
        if (numStr[i] % 2 === 0) {
            result = false;
        }
    };
    return result;
};
console.log(fn(number));