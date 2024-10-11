// Дана строка. Проверьте, что эта строка состоит только из цифр.

const str = '0123456789';

const fn = (str) => {
    for (let i = 0; i < str.length; i += 1) {
        if (Number.isNaN(Number(str[i]))) {
            return false;
        }
    }
    return true;
};
console.log(fn(str));