// Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.

const fn = (str) => {
    for (let i = str.length; i >= 0; i -= 1) {
        console.log(str[i])
    }
};

fn('hello');
