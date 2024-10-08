// Дан некоторый массив, например, вот такой:

const arr = [1, 2, 3, 4, 5, 6];
// Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях.

const fn = (arr) => {
    const even = arr.reduce((acc, e) => e % 2 === 0 ? acc + e : acc + 0, 0);
    const odd = arr.reduce((acc, e) => e % 2 !== 0 ? acc + e : acc + 0, 0);
    return odd / even;
};
console.log(fn(arr)); 

const fn2 = (arr) => {
    let even = 0;
    let odd = 0;
    arr.forEach(e => e % 2 === 0 ? even += e : odd += e);
    return even / odd;
};
console.log(fn2(arr));