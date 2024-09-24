// Дана строка с буквами. Проверьте, что в этой строке не более двух заглавных букв.

const str = 'QwErTy';

// const fn = (str) => 
//     str.split('').reduce((acc, char) => {
//         if (char === char.toUpperCase()) {
//             acc += 1;
//         }
//         return acc;
//     }, 0) > 2;
    // console.log(fn(str));

    const fn2 = (str) => {
        let count = 0;
        for (let i = 0; i < str.length; i += 1) {
            if (str[i] === str[i].toUpperCase()) {
                count += 1;
            }
        };
        return count < 2;
    };
    console.log(fn2(str));


