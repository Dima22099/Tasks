// Через запятую написаны числа. Получите максимальное из этих чисел.
const strNum = '1, 2, 3, 4, 5, 6';

const fn = (strNum) => {
    const str = strNum.split(', ');
    let temp = 0;
    for (let i = 0; i < strNum.length; i += 1) {
        if (Number(str[i]) > temp) {
            temp = str[i];
        }
    }
    return Number(temp);
}
// console.log(fn(strNum));

const fn2 = (strNum) => Math.max(...strNum.split(', ').map(Number));
console.log(fn2(strNum));