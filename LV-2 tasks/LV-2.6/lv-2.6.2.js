// Дан массив с некоторыми числами, например, вот такой:

const arr = [123, 456, 789];
// Напишите код, который перевернет числа в этом массиве по следующему принципу:

// [321, 654, 987]

const fn = (arr) => {
    const result = [];
    result.push(arr.reverse(Boolean));
    return result;
};
console.log(fn(arr));
