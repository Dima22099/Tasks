// Сделайте функцию, которая будет возвращать сколько дней осталось до конца текущего месяца.

const fn = () => {
    const getYear = new Date().getFullYear();
    const getMonth = new Date().getMonth() + 1;
    const getDate = new Date(getYear, getMonth, 0).getTime();
  
    const currentDate = new Date().getTime();
    return Math.floor((getDate - currentDate) / 1000 / 60 / 60 / 24) + ' days';
};
console.log(fn());
