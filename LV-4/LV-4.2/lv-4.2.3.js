// Сделайте функцию, которая будет возвращать сколько дней прошло или осталось
//  до заданной даты в году, 
// в зависимости от того, была уже эта дата или нет.

const date = '20.10.2024';
const fn = (date) => {
    const newFormateDate = date.split('.').reverse().join(', ');
    console.log(newFormateDate);
};
console.log(fn(date));