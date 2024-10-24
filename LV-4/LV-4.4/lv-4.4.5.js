// Сделайте функцию, которая параметром будет принимать число и удалять из него четные цифры.

const num = 2121;

const fn = (num) => {
    let result = '';
    const strNum = String(num);
    for (let i = 0; i < strNum.length; i += 1) {
        if (strNum[i] % 2 !== 0) {
            result += strNum[i];
        }
    }
    return Number(result);
};
console.log(fn(num));