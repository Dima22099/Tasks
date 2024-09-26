// Дано некоторое число. Проверьте, что цифры этого числа расположены по возрастанию.

const number = 123456;

const fn = (number) => {
    const numStr = String(number);
    let result = false;
    for (let i = numStr.length - 1; i >= 0;  i -= 1) {
        if (Number(numStr[i]) - Number(numStr[i - 1]) === 1) {
		      // console.log(Number(numStr[i]) - Number(numStr[i - 1]))
          result = true;
        }
        return result;
    };
};
console.log(fn(number));