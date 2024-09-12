// Даны два слова. Проверьте, что первые буквы этих слов совпадают.


const fn = (word, str) => console.log(word[0] === str[0] ? 'Yes' : 'No');
fn('hello', 'hy')