// Сделайте функцию, которая параметром будет принимать число,
//  а возвращать сумму его делителей.
const num = 18;

const fn = (num) => {
    let result = 0;
    for (let i = 0; i < num; i += 1) {
        if (num % i === 0) {
            result += i;
        }
    }
    return result; 
};
console.log(fn(num));