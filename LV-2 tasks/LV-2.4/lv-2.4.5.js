    // Дана некоторая строка со словами:

    const str = 'aaa bbb ccc';
    // Сделайте заглавным первый символ каждого слова в этой строке. 
    // В нашем случае должно получится следующее:

    // 'Aaa Bbb Ccc'

    const fn = (str) => {
        let result = '';
        str.split(' ').forEach(e => result += e[0].toUpperCase() + e.slice(1) + ', ');
        return result;
    };
    console.log(fn(str));