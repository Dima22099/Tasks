// Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.

const num = 5;

const fn = (num) => {
    let count = [];
    for (let i = 0; i <= num; i += 1) {
        if (num % i === 0) {
            count.push(i)
        }
    };
    return count.length === 2;
};
console.log(fn(num));