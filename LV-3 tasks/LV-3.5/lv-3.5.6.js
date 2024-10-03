// Напишите программу, которая сформирует следующую строку:

// '-1-2-3-4-5-'

const fn = () => {
    let result = "-";
  for (let i = 0; i < 6; i += 1) {
    result += i + '-';
  }
  return result;
};
console.log(fn());