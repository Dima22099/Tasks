// Даны два массива:
const arr1 = [1, 2, 3, 5, 7, 8, 9];
const arr2 = [1, 2, 3, 4, 5];
// Удалите из большего массива лишние элементы с конца так, чтобы длины массивов стали одинаковыми.
const fn = (arr1, arr2) => {
  const isTheFirstOneLonger = arr1.length > arr2.length ? [...arr1] : [...arr2]; //если 1 массив болше, то 1-й массив иначе 2-й
  const arrLength =  arr1.length < arr2.length ? arr1.length : arr2.length; // длина мин массива
    return isTheFirstOneLonger.slice(0, arrLength);
}
console.log(fn(arr1, arr2));