// Дана некоторая строка. Найдите позицию третьего нуля в строке.

// const str = '090807'; // 4
// const str = '0006' // 2
const str = '010237373747470'; // 14
const three = 3;

const fn = (str, three) => {
    let zeroCount  = 0;
    for (let i = 0; i <= str.length - 1; i += 1) {
        if (Number(str[i]) === 0) {
            zeroCount += 1;
            console.log(zeroCount);
            console.log('i -' + i);
        }
        if (zeroCount === three) {
            return i;
        }
    }
};
console.log(fn(str, three));