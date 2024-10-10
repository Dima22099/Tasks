// Дано число. Проверьте, что у этого числа есть только один делитель, 
// кроме него самого и единицы.

const num = 10;

const fn = (num) => {
    for (let i = 2; i < num - 1; i += 1) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};
console.log(fn(num));
