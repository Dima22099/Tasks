// Сделайте функцию, которая параметром будет принимать число, 
// а возвращать массив его делителей, являющихся простыми числами.
const number = 20;
const isPrime = (number) => {
  if (number <= 1) return false;
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getArrOfPrimeNumbers = (number) => {
    const result = [];
    for (let i = 2; i <= number; i += 1) {
        if (number % i === 0 && isPrime(i)) {
            result.push(i);
        }
    }
    return result;
};
console.log(getArrOfPrimeNumbers(number));