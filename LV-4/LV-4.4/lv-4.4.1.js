// Сделайте функцию, которая параметром будет принимать число, 
// а возвращать количество его делителей.

const num = 24;

const fn = (num) => {
  const result = [];
  for (let i = 0; i <= num; i += 1) {
    if (num % i === 0) {
      result.push(i);
    }
  }
  return result.length;
};
console.log(fn(num));