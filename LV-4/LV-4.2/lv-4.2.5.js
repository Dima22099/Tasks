// Сделайте функцию, которая вернет массив всех високосных годов за предыдущие сто лет.


const fn = () => {
    const result = [];
    const year = 2024 - 100;
    for (let i = year; i < 2024; i+= 4) {
        if (year % 4 === 0) {
            result.push(i);
        }
    }
    return result; 
};
console.log(fn());