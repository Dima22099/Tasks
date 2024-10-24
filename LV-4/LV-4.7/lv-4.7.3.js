// Сделайте функцию, которая будет возвращать случайное число. 
// Функция не должна возвращать одно и тоже число два раза подряд.


const getRandomNum = () => Math.round(Math.random() * 100);
console.log(getRandomNum());