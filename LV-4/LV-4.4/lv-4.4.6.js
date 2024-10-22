// Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка.

const fn = (to, from) => {
  const result = [];
  const random = Math.floor(Math.random() * (from -to));
  for (let i = 0; i <= random; i += 1) {
    result.push(Math.floor(Math.random() * (from -to)));
  }
  return result;
}
console.log(fn(5, 15));