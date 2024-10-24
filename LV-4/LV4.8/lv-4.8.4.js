// Сделайте функцию, которая будет возвращать массив простых чисел из заданного промежутка.

const to = 2;
const from = 24;

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  } 
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
    return true;
  }
};

const getArrayNumber = (to, from) => {
    const result = [];
    for (let i = to; i < from; i += 1) {
        if (isPrime(i)) {
            result.push(i);
        }
    }
    return result;
};
console.log(getArrayNumber(to, from));