// Сделайте функцию, которая параметром будет принимать текст со словами, 
// а возвращать текст, в котором эти слова будут отсортированы в алфавитном порядке.

const text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, sapiente.';

const sortWord = (text) => text.split(' ').sort().join(' ');
console.log(sortWord(text));