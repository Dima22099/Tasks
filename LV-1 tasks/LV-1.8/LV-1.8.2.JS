// Заполните массив четными числами из промежутка от 1 до 100.

const arr = [];

const fn = () => {
    for (let i = 1; i < 100; i += 1) {
        if (i % 2 === 0) {
            arr.push(i)
        }
    }
    return arr;
};

console.log(fn());