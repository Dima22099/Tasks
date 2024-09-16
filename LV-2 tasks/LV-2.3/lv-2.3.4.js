// Дана дата в следующем формате:

// '2025-12-31'
// Преобразуйте эту дату в следующий объект:

// {
// 	year: '2025',
// 	month: '12',
// 	day: '31',
// }

const date = '2025-12-31';

const fn = (date) => {
    const result = {
        year: date.split('-')[0],
        month: date.split('-')[1],
        day: date.split('-')[2],
    };
    return result;
};
console.log(fn(date));