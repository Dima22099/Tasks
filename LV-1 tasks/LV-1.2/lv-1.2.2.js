// Дано число. Выведите в консоль последнюю цифру этого числа.

const fn = (num) => {
    const result = String(num);
    console.log(result[result.length -1]);
}
fn(789)