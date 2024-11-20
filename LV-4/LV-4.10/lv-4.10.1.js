// Сделайте функцию, которая параметром будет принимать букву 
// и проверять, это буква кириллицы или латиницы.

const checkLetter = (letter) => {
    const char = letter.charCodeAt();
    if (char >= 1040 && char <= 1103) {
        return 'сyrillic letter';
    } else if (char => 64 && char <= 90) {
        return 'latin letters';
    } else if (char => 97 && char <= 122) {
        return 'latin letters';
    }
    return 'this is not a letter'; 
};
console.log(checkLetter('a'));