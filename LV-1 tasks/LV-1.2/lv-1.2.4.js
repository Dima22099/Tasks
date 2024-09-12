// Дано число. Выведите количество цифр в этом числе.

const fn = (num) => {
    const result = String(num);
    console.log(result.length);
}
fn(123);

const fn2 = (num) => console.log(String(num).length);
fn2(123);