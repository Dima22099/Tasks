// Дана строка. Проверьте, что эта строка состоит только из четных цифр.

const strNum = '24680';

const fn = (strNum) => {
    for (let i = 0; i < strNum.length; i += 1) {
        if (Number(strNum[i]) % 2 !== 0) {
            return false;
        }
    }
    return true;
};
console.log(fn(strNum));