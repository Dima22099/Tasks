// Дана строка:
// 'abcde'
// Получите массив букв этой строки.


const str = 'abcde';

const fn = (str) => {
    const arr = [];
    for (let i = 0; i < str.length; i += 1) {
        arr.push(str[i]);
    }
    return arr;
};

console.log(fn(str));