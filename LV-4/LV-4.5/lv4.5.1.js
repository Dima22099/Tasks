// Дана переменная со строкой. Проверьте, что эта строка представляет собой число, 
// то есть состоит только из цифр.

const num = '12345';

const isNumber = (num) => Number.isNaN(Number(num));

const fn = (num) => {
    const stringNum = String(num);
    for (let i = 0; i < stringNum.length; i += 1) {
        if (isNumber(stringNum[i])) {
        return false;
        } 
    }
    return true;
}
console.log(fn(num));   