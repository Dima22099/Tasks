    // Сделайте функцию, которая будет возвращать массив простых чисел из заданного промежутка.

    const min = 2;
    const max = 24;

    const isPrime = (num) => {
      if (num <= 1) {
        return false;
      } 
      for (let i = 2; i <= Math.sqrt(num); i += 1) {
        if (num % i === 0) {
          return false;
        }
      }
        return true;
    };

    const getArrayNumber = (min, max) => {
        const result = [];
        for (let i = min; i < max; i += 1) {
            if (isPrime(i)) {
                result.push(i);
            }
        }
        return result;
    };
    console.log(getArrayNumber(min, max));
