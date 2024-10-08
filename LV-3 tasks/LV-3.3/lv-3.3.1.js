// Дан массив со словами. Удалите из него слова, состоящие более чем из трех символов.

const arr = ['qwerty', 'abba', 'auto', 'acc', 'el', 'not'];

const fn = (arr) => 
    arr.filter((el) => el.length < 4)
console.log(fn(arr));

// const fn = (arr) => 
//     arr.reduce((acc, str, i) => {
//         if (str.length < 4) {
//             acc.push(str);
//         }
//       return acc;
//     }, [])
// console.log(fn(arr));