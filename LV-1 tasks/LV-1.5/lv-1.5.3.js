// Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.

const fn = () => {
    let result = 0;
    for (let i = 0; i <= 100; i += 1) {
        if (i % 2 !== 0) {
            result += i;
        }
    };
    return result;
};

fn();