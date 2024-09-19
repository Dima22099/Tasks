// Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем.
const char = '-';

const fn = (char) => {
    let result = '';
    if (char === char.toUpperCase()) {
        result += true;
    }
    return Boolean(result);
}; 
console.log(fn(char));



const fn2 = (char) => char === char.toUpperCase() ? true : false;
console.log(fn2(char));