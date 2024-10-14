    // Дан массив со числами. Оставьте в нем числа, состоящие из разных цифр, а остальные удалите.

    const number = 1233133241789043;
    const fn = (number) => new Set(String(number).split('').map(Number));
    console.log(fn(number));
