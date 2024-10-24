// Сделайте функцию, которая заполнит массив случайными латинскими буквами. 

    const lengthArray = (to, from) => {
            const result = [];
            for (let i = to; i < from; i += 1) {
                result.push(i);
            }
            return result;
            };

const getRandomChar = (to, from) => {
    const randomNum = Math.floor(Math.random() * (from - to));
    return lengthArray(to, from).reduce((acc, el, i) => {
        if (i < randomNum) {
            acc.push(String.fromCharCode(Math.round(Math.random() * 100)));
        } 
        return acc;
    }, []);
};
console.log(getRandomChar(65, 120));
