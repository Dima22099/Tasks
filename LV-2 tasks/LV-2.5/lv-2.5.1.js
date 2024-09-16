// Дана некоторая строка, например, вот такая:

const str = '023m0df0dfg0';
// Получите массив позиций всех нулей в этой в строке.

const fn = (str) => str.split('').map((e, i)=> e == 0 ? i : '').filter(e => typeof e === 'number');
console.log(fn(str));