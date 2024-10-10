// Дана некоторая строка, например, вот такая:

const str = '023m0df0dfg0';
// Получите массив позиций всех нулей в этой в строке.

const fn = (str) => str.split('').map((e, i)=> e == 0 ? i : '').filter(e => typeof e === 'number');
console.log(fn(str));

const fn3 = (str) => {
    return str.split('').reduce((acc, char, i) => {
       if (Number(char) === 0) {
        acc.push(i);   
       };
        return acc;
    }, []);
};
console.log(fn3(str));

