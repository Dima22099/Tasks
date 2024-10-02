// Дан некоторый массив, например, вот такой:

const arr = [1, 2, 3, 4, 5, 6];
// Поменяйте местами пары элементов этого массива:

// [2, 1, 4, 3, 6, 5]

const fn = (arr) => {
    const result = [];
    arr.reduce((acc, el, i) => {
        if (i % 2 !== 0) {
            acc.push(...acc, el);
        } else {
            acc.push(el, ...acc)
        }
    }, []);
};
console.log(fn(arr));