// Дано число, например, вот такое:

let num = 12345;
// Проверьте, что все цифры этого числа больше нуля

const fn = (num) => {
    const strNum = String(num); 
    for (let i = 0; i < strNum.length; i += 1) {
        if (strNum[i] === 0) {
            return false;
        }
    }   
    return true;
};
console.log(fn(num)); // не понимать что здесь вообще происходит, i выдает не пойми что
// числа записываются в другой системем исчесления