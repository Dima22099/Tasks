// Выведите в консоль все числа в промежутке от 10 до 1000, 
// у которых предпоследняя цифра четная.

const fn = () => {
    const result = [];
    for (let i = 10; i < 1000; i += 1) {
        if (Number(String(i).length -1) % 2 === 0) {
            result.push(i);
        }
    };
    return result;
};
console.log(fn());