// Дана некоторая строка со словами:

const str = 'aaa bbb ccc eee fff';
// Сделайте заглавным первый символ каждого второго слова в этой строке. 
// В нашем случае должно получится следующее:

// 'aaa Bbb ccc Eee fff'

const fn2 = (str) => {
    let result = '';

    let word = '';
    let wordCount = 0;
    for (let i = 0; i < str.length; i += 1) {
        if (str[i] === ' ') {
            wordCount += 1;

            result += word + ' ';
            word = '';
            continue;
        }
        if (word === '') {
            word += (wordCount % 2 === 0) ? str[i] : str[i].toUpperCase();
        } else {
            word += str[i];
        }
    }
    result += word;

    return result;
};
console.log(fn2(str));