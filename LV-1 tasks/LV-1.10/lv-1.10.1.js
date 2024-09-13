// Заполните массив случайными числами из промежутка от 1 до 100.

const fn = () => {
    let result = [];
    for (let i = 1; i < Math.random() * 100; i++) {
        result.push(Math.floor(Math.random() * 100));
    };
    result = result.filter(el => el > 0);
    return result;
};

console.log(fn());