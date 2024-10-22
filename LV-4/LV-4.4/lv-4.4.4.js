// Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.

const num = 5;

const fn = (num) => {
    let count = [];
    for (let i = 0; i <= num; i += 1) {
        if (num % i === 0) {
            count.push(i)
        }
    };
    count = count.length === 2;
    return count;
};
console.log(fn(num));