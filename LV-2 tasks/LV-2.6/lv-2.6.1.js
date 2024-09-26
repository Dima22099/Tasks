// Дана некоторая строка с буквами и цифрами. Получите массив позиций всех цифр из этой строки.

const str = 'qwerty123099';

const fn = (str) => 
    str.split('').reduce((acc, el, i) => {
        if (Number.isNaN(Number(el))) {
            acc.push(i)
        }
        return acc;
    }, []);
console.log(fn(str));


const fn2 = (str) => {
    const result = [];
    for (let i = 0; i < str.length; i += 1) {
        if (!Number.isNaN(Number(str[i]))) {
            result.push(i);
        }
    }
    return result;
};
console.log(fn2(str));