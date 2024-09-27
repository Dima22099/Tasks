// Выведите в консоль все числа в промежутке от 1 до 1000, 
// сумма первой и второй цифры которых равна пяти.

const fn = (number) => {
    let result = [];    
    for (let i = 10; i < 500; i += 1) {
        let firstNum = String(i)[0];
        let secondNum = String(i)[1];

        if ((Number(firstNum) + Number(secondNum)) === 5) {
            result.push(i);
        }
    }
    return result;
};
console.log(fn());

