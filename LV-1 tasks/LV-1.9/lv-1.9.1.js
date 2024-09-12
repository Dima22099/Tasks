// Дан массив со строками. 
// Оставьте в этом массиве только те строки, которые начинаются на http://.

const arr = ['http://yandex.ru', 'http://youtube.com', 'ya.ru', 'google.ru'];

const fn = (arr) => {
    arr = arr.filter(i => i.startsWith('http://'));

    return arr;
};

console.log(fn(arr));