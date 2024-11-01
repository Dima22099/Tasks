// Сделайте функцию, которая параметром будет принимать массив и возвращать случайный 
// элемент этого массива так, 
// чтобы одинаковые элементы не возвращались два раза подряд.


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,0];

const getRandomNum = (arr) => Math.round(Math.random() * (arr.length - 1));

const getNRandomElement = (arr) => {
  const result = [];
    const randomNum = getRandomNum(arr);
    for (let i = 0; i <= randomNum; i += 1) {
        result.push(arr[getRandomNum(arr)]);
    };
  return [...new Set(result)];
};
console.log(getNRandomElement(arr));    