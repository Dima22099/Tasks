// Дана строка с буквами. Проверьте, что в этой строке не более двух заглавных букв.

const str = 'QwErTy';

    const fn2 = (str) => {
        let count = 0;
        for (let i = 0; i < str.length; i += 1) {
            if (str[i] === str[i].toUpperCase()) {
                count += 1;
            }
            if (count === 3) {
                return false;
            }
        };
        return count;
    };
    console.log(fn2(str));


