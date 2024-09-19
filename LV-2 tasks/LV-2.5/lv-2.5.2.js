// Дана некоторая строка:

const str = 'abcdefg';
// Удалите из этой строки каждый третий символ. В нашем случае должно получится следующее:

// 'abdeg'

const fn = (str, num) => str.split('').filter((_, i) => (i + 1) % num !== 0).join('');

console.log(fn(str, 3));