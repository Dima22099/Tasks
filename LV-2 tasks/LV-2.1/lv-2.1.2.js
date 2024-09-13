// Выведите в консоль все числа в промежутке от 1 до 1000, 
// сумма первой и второй цифры которых равна пяти.

const fn = (number) => {
    let result = 0;
    for (let i = 10; i < 1000; i++) {
        let firstNum = String(i)[0];
        let middleNum = String(i)[1];
        if (parseInt(firstNum) + parseInt(middleNum) === 5) {
            result += `${i};`;
        }
    }
    return result;
};
console.log(fn());

