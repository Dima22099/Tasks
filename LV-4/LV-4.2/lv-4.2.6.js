// Сделайте функцию, которая будет возвращать сколько дней осталось до конца текущего месяца.

const fn = () => {
    const date = '31.12.2024';
    const currentDate = new Date().getTime();
    return Math.floor((new Date(date.split('.').reverse()).getTime() - currentDate) / 1000 / 60 / 60 / 24);
};
console.log(fn());
