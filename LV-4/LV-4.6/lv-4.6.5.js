// Сделайте функцию, которая параметром будет принимать секунды, 
// а возвращать количество дней, часов, минут и секунд, соответствующих этим секундам, 
// в виде следующего объекта:
// {
// 	d: 12,
// 	h: 10,
// 	m: 59,
// 	s: 59,
// }

const seconds = 123010; // 1 day // 10 h // 10 minute // 10 seconds 
const getDay = (seconds)=> {
    const secondsIntoDays = seconds / 60 / 60 / 24;
    const d = Math.floor(secondsIntoDays);
    const h = Math.floor((24 / 100) * Number(String(secondsIntoDays).split('.')[1].slice(0, 2)));  
    const m = (60 / 100) * secondsIntoDays;
    const s = seconds;
    return {d, h, m, s};

};
console.log(getDay(seconds));

