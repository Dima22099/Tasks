// Найдите все числа от 1 до 1000, сумма цифр которых равна 13.

const fn = () => {
    const result = [];
    for (let i = 12; i < 1000; i += 1) {
        const temp = String(i).split('').map(Number).reduce((a, b) => {
            return a + b}, 0);
        if (temp === 13) {
            result.push(i); 
        }
    }
    return result;
};
console.log(fn());