// Найдите сумму всех целых четных чисел в промежутке от 1 до 100.

const fn = () => {
    let result = 0;
    for (let i = 1; i <= 100; i += 1) {
        if (i % 2 === 0) {
            result += i;
        }
    }
    return result;
};

fn();