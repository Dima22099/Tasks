// Заполните массив случайными числами из промежутка от 1 до 100.

const fn = () => {
    let result = [];
    for (let i = 1; i < 100; i += 1) {
        result.push(Math.floor(Math.random() * 100));
    };
    return result;
};

console.log(fn());
// Кол-во итерация фиксированное
// Фильтр не нужен