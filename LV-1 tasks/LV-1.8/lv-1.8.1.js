// Заполните массив целыми числами от 1 до 10.

const arr = []; 

const fn = () => {
    for (let i = 1; i < 10; i += 1) {
        arr.push(i)
    };
    return arr;
};

console.log(fn());