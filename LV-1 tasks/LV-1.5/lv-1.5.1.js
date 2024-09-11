// Найдите сумму всех целых чисел от 1 до 100.

const fn = () => {
    let result = 0;
    for (let i = 0; i < 100; i += 1) {
         result += i;
    }
    return result;
};

fn();