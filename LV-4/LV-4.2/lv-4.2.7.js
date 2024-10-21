// Сделайте функцию, которая вернет предыдущий, текущий и следующий дни недели словом в виде следующего объекта:

// {
// 	next: 'пн',
// 	curr: 'вс',
// 	prev: 'сб',
// }

const fn = () => {
    const days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    const currDay = new Date().getDay();
    return {
        next: days[currDay + 1],
        curr: days[currDay],
        prev: days[currDay - 1],
    };
};
console.log(fn());