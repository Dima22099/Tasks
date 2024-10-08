// Дано число. Проверьте, что у этого числа есть только один делитель, 
// кроме него самого и единицы.

const num = 7;

const fn = (num) => {
    if (num % num === 0 && num % 1 === 0) {
        return true;
    }
    return false;
};
console.log(fn(num));
