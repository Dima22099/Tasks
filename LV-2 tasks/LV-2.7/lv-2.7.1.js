// Дана некоторая строка:

const str = 'a bc def ghij';
// Переведите в верхний регистр все подстроки, в которых количество букв меньше или равно трем.
//  В нашем случае должно получится следующее:

// 'A BC DEF ghij';

const fn = (str) => 
    str.split(' ').reduce((acc, el) => {
        if (el.length <= 3) {
            acc += el.toUpperCase() + ' ';
        } else {
            acc += el + ' ';
        }
		return acc;
    }, '');
console.log(fn(str));