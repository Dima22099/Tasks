// Дано число. Получите первую четную цифру с конца этого числа.
const number = 220899;

const fn = (number) => Number(String(number).split('').reverse().find(num => num % 2 === 0));
console.log(fn(number));

const fn2 = (number) => {
    const str = String(number);
    for (let i = str.length; i > 0; i -= 1) {
        if (Number(str[i]) % 2 === 0) {
            return Number(str[i]);
        }
	}
	return false;
};      
console.log(fn2(number));     
