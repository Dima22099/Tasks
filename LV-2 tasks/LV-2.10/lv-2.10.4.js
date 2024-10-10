// Дан массив с числами:
const arr = [1, 2, 3, 4, 4, 5];
// Проверьте, что в этом массиве есть два одинаковых элемента подряд.

const fn = (arr) => {
  for (let i = 0; i < arr.length - 1; i += 1) {
    if (arr[i] === arr[i + 1]) {
      return true;
    }
  }
  return false;
};
console.log(fn(arr));


