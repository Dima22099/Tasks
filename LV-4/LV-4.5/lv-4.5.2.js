// Дана переменная со строкой. Проверьте, что в эта строка представляет собой дробь.

const str = '23 / 34';

const fn = (str) => {
    for (let i = 0; i < str.length; i += 1) {
        if (str[i] === '/') {
            return true;
        }
    }
    return false;
};
console.log(fn(str));