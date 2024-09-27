// Дана некоторая строка:

const str = 'a bc def ghij';
// Переведите в верхний регистр все подстроки, в которых количество букв меньше или равно трем.
//  В нашем случае должно получится следующее:

// 'A BC DEF ghij'

const fn2 = (str) => {
    const count = str.split(' ').filter(e => e.length <= 3);
    let result = '';
    for (let i = 0; i < count.length; i += 1) {
        result += count[i].toUpperCase() + ' ';
    };
    return result;
};
console.log(fn2(str));