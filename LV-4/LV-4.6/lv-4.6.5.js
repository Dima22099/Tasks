// Сделайте функцию, которая параметром будет принимать секунды, 
// а возвращать количество дней, часов, минут и секунд, соответствующих этим секундам, 
// в виде следующего объекта:

// {
// 	d: 12,
// 	h: 10,
// 	m: 59,
// 	s: 59,
// }

const seconds = 4465465465;

const getDay = (seconds)=> {
    const date = new Date(seconds);
    const d = date.getDay();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    return {d, h, m, s};

};
console.log(getDay(seconds));
