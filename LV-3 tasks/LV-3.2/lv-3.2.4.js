// Дана некоторая строка со словами:

const str = 'aaa bbb ccc eee fff';
// Удалите из этой строки каждое второе слово. В нашем случае должно получится следующее:

// 'aaa ccc fff'
const fn = (str) => {
	let result = '';

	let word = '';
	let wordsCount = 0;
	for (let i = 0; i < str.length; i += 1) {
		if (str[i] === ' ') {
			wordsCount += 1;
			
			result += word + ' ';
			word = '';
			continue;
		}
		if (wordsCount % 2 === 0) {
			word += str[i];
		}
	}
	result += word;
	return result;
};        

console.log(fn(str));
 
