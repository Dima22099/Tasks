// Сделайте функцию, которая параметром будет принимать массив 
// и возвращать массив из N случайных элементов этого массива.

const arr = [1, 2, 3, 4, 6, 8, 9,0];

const getRandomNum = (arr) => Math.floor(Math.random() * (arr.length - 1));

const getNRandomElement = (arr) => {
  const result = [];
    const randomNum = getRandomNum(arr);
    for (let i = 0; i <= randomNum; i += 1) {
        result.push(arr[getRandomNum(arr)]);
    };
  return [...new Set(result)];
};
console.log(getNRandomElement(arr));  
