// Дана строка. Удалите из нее все гласные буквы.

const vowels = ['A', 'E', 'I', 'O', 'U', 'Y'];
const surname = 'Azizov';

const fn = (str) => {
    let result = '';
    for (let i = 0; i < surname.length; i += 1) {
        if (!vowels.includes(surname[i].toUpperCase())) {
            result += surname[i];
        }
    }
    return result;
};
console.log(fn(surname));

