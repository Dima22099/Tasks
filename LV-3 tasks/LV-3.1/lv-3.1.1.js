// Дано некоторое число. Проверьте, что цифры этого числа расположены по возрастанию.

// const number = 4523;
const number = 456;

const fn = (number) => {
    let prevNum = Number(String(number)[0]) - 1;
    let result = true;
    String(number).split('').forEach(num => {
        if (Number(num) - prevNum === 1) {
	        prevNum = Number(num);
        } else {
            result = false;
        }
    }); 
    return result;
};
console.log(fn(number));