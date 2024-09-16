// Дана некоторая строка. Найдите позицию третьего нуля в строке.

// const str = '090807';
const str = '0006'

const fn = (str) => {
    const zeroThree = 3;
    let result  = 0;
    let count = 0;
    for (let i = 0; i < str.length - 1; i++) {
      count += 1;
        if (Number(str[i]) === 0) {
            result += 1;
        }
        if (result === zeroThree) {
            return count;
        }
    }
};
console.log(fn(str));
