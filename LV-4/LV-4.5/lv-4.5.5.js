// Сделайте функцию, которая заполнит массив случайными латинскими буквами. 

const fn = () => {
    const fn = (to, from) => {
        const result = [];
        for (let i = to; i < from; i += 1) {
            result.push(i);
        }
        return result;
        };
    
    const randomNum = Math.floor(Math.random() * (120 -65));
    return fn(65, 120).reduce((acc, el, i) => {
        if (i < randomNum) {
            acc.push(String.fromCharCode(el));
        } 
        return acc;
    }, []);
};
console.log(fn());