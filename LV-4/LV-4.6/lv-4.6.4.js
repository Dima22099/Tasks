// Сделайте функцию, которая параметром будет принимать массив с числами
//  и заменять каждое число на массив его делителей.


const number = [2, 3, 4, 5, 6, 7, 8];

const arrayOfDelimiters = () => {
    const result = [];
    for (let i = 0; i < number.length; i += 1) {
        const arr = [];
        for (let j = 0; j <= number[i]; j += 1) {
            if (number[i] % j === 0) {
                arr.push(j)
            }
        }
        result.push(arr);
    }
    return result;
};
console.log(arrayOfDelimiters(number));