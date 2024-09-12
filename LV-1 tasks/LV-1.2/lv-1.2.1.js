// Дано число. Выведите в консоль первую цифру этого числа.

const fn = (num) => {
    let result = String(num)
    console.log(result[0]);
}

const fn2 = (num) => console.log(Number(String(num)[0]));
fn2(456);