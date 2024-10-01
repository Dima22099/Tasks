// Дана строка с буквами. Проверьте, что в этой строке не более двух заглавных букв.

const str = 'QwErTy';

const fn = (str) => 
    str.split('').reduce((acc, char) => {
        if (char === char.toUpperCase()) {
            acc += 1;
        }
         if (acc > 3) {
            return false;
         }
        return acc;
    }, 0) > 2;
    console.log(fn(str));
