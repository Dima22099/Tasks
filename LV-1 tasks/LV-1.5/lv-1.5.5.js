// Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.

const fn = (str) => {
    let lengthStr = str.length;
    for (let i = lengthStr; i >= 0; i -= 1) {
        console.log(str[i])
    }
};

fn('hello');