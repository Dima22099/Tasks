// Дана строка. Если в этой строке более одного символа,
// выведите в консоль предпоследний символ этой строки.

const fn = (str) => {
    if (str.length > 0) {
        return str[str.length - 2]
    }
};

fn('qw');

const fn2 = (str) => console.log(str.length > 0 ? str[str.length -2] : ''); 
fn2('qw');