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
fn(123, 125);

const fn2 =(num1, num2) => Number(String(num1)[0]) === Number(String(num2)[0]);
fn2(123, 125);