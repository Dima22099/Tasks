// Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем.
const char = '-';

const fn = (char) => {
    if (char === char.toUpperCase()) {
		return true;
    }
	return false;
}; 
console.log(fn(char));



const fn2 = (char) => char === char.toUpperCase();
console.log(fn2(char));