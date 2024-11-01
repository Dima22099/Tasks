// Сделайте функцию, которая сгенерирует строку заданной длины, 
// заполненную случайными латинскими буквами.

const lengthStr = 5;


const getRandomNum = (to, from) => Math.floor(Math.random() * (from -to));

const randomStr = (lengthStr) => {
    const result = [];
    for (let i = 0; i < lengthStr; i += 1) {
      result.push(getRandomNum(65, 90));
    }
  return result;
};
console.log(randomStr(lengthStr));