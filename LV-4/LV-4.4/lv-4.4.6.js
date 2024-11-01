// Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка.

const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1));

const fn = (min, max) => {
  const result = [];
  const random = getRandomNum(min, max);
  for (let i = 0; i <= random; i += 1) {
    result.push(getRandomNum(min, max));
  }
  return result;
}
console.log(fn(5, 15));