// Дана строка. Сделайте заглавной последнюю букву каждого слова в этой строке.

const str = 'hello my friend!';

const fn = (str) =>  
  str.split(' ').map(el => el.slice(0, el.length - 1) + 
    (el[el.length - 1] === '!' ? el[el.length - 2].toUpperCase() : 
        el[el.length -1].toUpperCase())).join(' ');
console.log(fn(str));

//  === '!' ---костыль, как вылечит?