// Даны два числа. Проверьте, что первые цифры этих чисел совпадают.

const fn = (num1, num2) => {
    const res1 = String(num1);
    const res2 = String(num2);
    if ((res1[0] * 1) === (res2[0] * 1)) {
        return true
    } else {
        return false;
    }
};
fn(123, 125)