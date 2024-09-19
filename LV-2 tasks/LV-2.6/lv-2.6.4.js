// Дана некоторая строка:

const str = 'AbCdE';
// Смените регистр букв этой строки на противоположный. В нашем случае должно получится следующее:

// 'aBcDe'

const fn = (str) => 
    str.split('').reduce((acc, char) => {
        if (char === char.toUpperCase()) {
            acc += char.toLowerCase();
        } else {
			acc += char.toUpperCase()
		}
        return acc;
    }
    , []);
console.log(fn(str));