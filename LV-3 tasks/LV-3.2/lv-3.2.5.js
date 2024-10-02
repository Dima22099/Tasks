// Дан массив:

const arr = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]; 

// Найдите сумму элементов этого массива.

const fn = (arr) => 
   arr.reduce((acc, el) => {
    return acc + el.reduce((innerAcc, elem) => innerAcc + elem, 0)
   }, 0);
      
console.log(fn(arr));