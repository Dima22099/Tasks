// Даны два числа. Получите массив цифр, которые есть и в одном, и во втором числе.

const num1  = 1025;
const num2 = 705;

const fn = (num1, num2) => {
    const result = [];
  const moreStrNum = String(num1).length > String(num2).length ? String(num1) : String(num2);
  const lessStrNum = String(num1).length < String(num2).length ? String(num1) : String(num2);
  for (let i = 0; i < moreStrNum.length; i += 1) {
    if (moreStrNum.includes(lessStrNum[i])) {
      result.push(lessStrNum[i])
    }
  }
  return result.map(Number); 
};  
console.log(fn(num1, num2));