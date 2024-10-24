// Сделайте функцию, которая сгенерирует строку заданной длины, 
// заполненную случайными латинскими буквами.

const lengthStr = 5;

const randomStr = (lengthStr) => {
    const allChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M','N', 'O','P',
        'Q','R','S','T','U','V','W','X','Y','Z',];
    const result = [];
    for (let i = 0; i < lengthStr; i += 1) {
      result.push(allChar[Math.round(Math.random() * allChar.length)])
    }
  return result;
};
console.log(randomStr(lengthStr));