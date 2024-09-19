// Дан объект с ключами и значениями.
// Запишите в первый массив ключи объекта, а во второй - значения.

const info = {
    name: 'Ali',
    age: 21,
    male: 'male'
};

const fn = (info) => {
    const key = Object.keys(info);
    const value = Object.values(info);
    console.log(key, value);
};
console.log(fn(info));