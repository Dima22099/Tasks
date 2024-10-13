// Дан массив со числами. Проверьте, что все числа из этого массива содержат в себе цифру 3.

const arr = [13, 34, 56, 48, 133, 123];

const fn = (arr) => 
    arr.filter(el => !(String(el).includes('3')))
console.log(fn(arr));