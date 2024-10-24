// Сделайте функцию, которая заполнит массив N случайными
//  числами из заданного промежутка так, чтобы в массиве не было подряд двух одинаковых чисел.

const randomNumber = (to, from) => Math.round(Math.random() * (from -to));

const getArrRandomNumber = (to, from) => {
    const result = [];
    for (let i = 0; i < randomNumber(to, from); i += 1) {
        result.push(randomNumber(to, from));
    }
    return [...new Set(result)];
};
console.log(getArrRandomNumber(2, 10));