// Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка.

const getRandomNum = (to, from) => Math.floor(Math.random() * (from -to));

const fn = (to, from) => {
  const result = [];
  const random = getRandomNum();
  for (let i = 0; i <= random; i += 1) {
    result.push(getRandomNum());
  }
  return result;
}
console.log(fn(5, 15));