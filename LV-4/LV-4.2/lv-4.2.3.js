// Сделайте функцию, которая будет возвращать сколько дней прошло или осталось
//  до заданной даты в году, 
// в зависимости от того, была уже эта дата или нет.

const date = '20.10.2024';
const fn = (date) => {
    const valueDay = new Date(date.split('.').reverse()).getTime();
    const currentDay = new Date().getTime();
    return valueDay - currentDay < 1 ? ' ' + 'until this date' : ' ' + 'days left';
};
console.log(fn(date));