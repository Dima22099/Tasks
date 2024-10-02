// Дано некоторое число:

const number = 1357;
// Проверьте, что все цифры этого числа являются нечетными.

const fn = (number) => {
    const numStr = String(number);
    for (let i = 0; i < numStr.length; i += 1) {
        if (numStr[i] % 2 === 0) {
            return false;
        }
    };
    return true;
};
console.log(fn(number));