// Даны два слова. Проверьте, что первые буквы этих слов совпадают.


const fn = (word, str) => word[0] === str[0] ? console.log('Yes') : console.log('No');
fn('hello', 'hy')