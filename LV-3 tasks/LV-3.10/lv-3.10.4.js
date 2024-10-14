// Дано число. Получите массив позицией всех цифр 3 в этом числе, 
// за исключением первой и последней.

const number = 123313343;

const fn = (number) => 
    String(number).split('').reduce((acc, el, i) => {
        if (Number(el) === 3) {
            acc.push(i);
        }
        return acc;
    }, []).slice(1, -1); 
console.log(fn(number));


