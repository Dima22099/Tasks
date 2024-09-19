// Дана некоторая строка со словами:

const str = 'aaa bbb ccc eee fff';
// Сделайте заглавным первый символ каждого второго слова в этой строке. 
// В нашем случае должно получится следующее:

// 'aaa Bbb ccc Eee fff'

const fn = (str) => 
    str.split(' ').reduce((acc, el, i) => {
        if (i % 2 !== 0) {
            acc += el[0].toUpperCase() + el.slice(1) + ' ';
        } else {
			acc += el + ' ';
		}
        	return acc;
    }, '')
    console.log(fn(str));