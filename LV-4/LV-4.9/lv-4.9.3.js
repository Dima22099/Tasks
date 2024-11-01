// Сделайте функцию, которая будет возвращать случайный цвет.


const randomNum = () => Math.round(Math.random() * 10);

const getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i +=1) {
        color += letters[Math.round(Math.random() * 16)];
    }
    return color;
};
console.log(getRandomColor());