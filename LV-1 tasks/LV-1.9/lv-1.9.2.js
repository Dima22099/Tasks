// Дан массив со строками. 
// Оставьте в этом массиве только те строки, которые заканчиваются на .html.

const arr = ['index.html', 'index.css', 'index.js', 'index.jsx', 'web.html'];

const fn = (arr) => {
    const result = arr.filter(el => el.endsWith('.html'));
    return result;
};

console.log(fn(arr));

