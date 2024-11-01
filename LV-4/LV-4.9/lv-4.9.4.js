// Сделайте функцию, которая параметром будет принимать массив чисел и 
// возвращать массив общих делителей всех чисел из переданного массива.

const numbers = [2, 3, 4, 5, 6, 7, 8, 9];

const getDivisorsSum = () => {
    const result = [];
    for (const item of numbers) {
        const sum = [];
        for (let i = 0; i < item; i += 1) {
            if (item % i === 0) {
                sum.push(i);
            }
        }
        result.push(...sum);
    }
    return result;
};
console.log(getDivisorsSum(numbers));

