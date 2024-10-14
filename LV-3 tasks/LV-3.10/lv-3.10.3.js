// Даны два числа. Получите массив цифр, которые есть и в одном, и во втором числе.

const num1  = 1025;
const num2 = 705;

const fn = (num1, num2) => {
    const result = [];
    const isFirstLonger = String(num1).length > String(num2).length;
    const longer = isFirstLonger ? String(num1) : String(num2);
    const shorter = isFirstLonger ? String(num2) : String(num1);
    
    for (let i = 0; i < longer.length; i += 1) {
    if (longer.includes(shorter[i])) {
        result.push(shorter[i])
    }
    }
    return result.map(Number); 
};  
console.log(fn(num1, num2));