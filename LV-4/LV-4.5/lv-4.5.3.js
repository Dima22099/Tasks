// Сделайте функцию, которая параметром будет принимать 
// массив с числами и возвращать второе по величине число.

const number = [2, 4, 6, 8, 10, 12, 14, 16];

const fn = (number) => {
  const firstBigNum = number.filter(e => e !== Math.max(...number));  
  return Math.max(...firstBigNum);
};
console.log(fn(number));
 