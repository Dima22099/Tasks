// Сделайте функцию, которая параметром будет принимать 
// массив с числами и возвращать второе по величине число.

const number = [9, 2, 4, 1, 5, 10, 8, 7, 9.5];;

// const fn = (number) => {
//   const firstBigNum = number.filter(e => e !== Math.max(...number));  
//   return Math.max(...firstBigNum);
// };
// console.log(fn(number));
 
const getMaxNumber = (number) => {
    let prevMax = number[0];
    let maxNum = number[0];
    for (let i = 1; i <= number.length; i += 1) {
        if (number[i] > maxNum) {
            prevMax = maxNum;
            maxNum = number[i];
        } else if (number[i] > prevMax) {
          prevMax = number[i];
        }
    }
    return prevMax;
};
console.log(getMaxNumber(number));