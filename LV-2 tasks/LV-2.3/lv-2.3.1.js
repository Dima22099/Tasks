// Даны два слова. Проверьте, что последняя буква первого слова 
// совпадает с первой буквой второго слова.


const word1 = 'Azizov';
const word2 = 'vite';

const fn = (word1, word2) => word1[word1.length - 1] === word2[0];
console.log(fn(word1, word2));
