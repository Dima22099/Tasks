// Сделайте функцию, которая будет возвращать сумму N первых чисел Фибоначчи.

const numFib = 21;

const fn = (numFib) => {
    let result = 0;
    let secondNum = Math.round(numFib / 1.618);
    // if (secondNum > 5) {
    //     secondNum = Math.round(secondNum / 1.618);
    // }
    let firstNum = Math.round(secondNum / 1.618);
    // if (firstNum > 5) {
    //     firstNum = Math.round(firstNum / 1.618);
    // }
    return firstNum + secondNum;
};
console.log(fn(numFib));

const getNSumFibonacci = (numFib) => {
    
};
console.log(getNSumFibonacci(numFib));