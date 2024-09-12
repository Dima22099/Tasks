// Дано число. Выведите в консоль сумму первой и последней цифры этого числа.

const fn = (num) => {
    const result = String(num);
    console.log((result[0] * 1) + (result[result.length -1] * 1));
}
fn(125);

const fn2 = (num) => console.log((Number(String(num)[0]) + (Number(String(num)[length]))));
fn2(125);