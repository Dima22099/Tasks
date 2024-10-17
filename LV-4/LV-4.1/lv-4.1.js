// Сделайте функцию, которая вернет текущий день недели словом.
const date = new Date();

const fn = (date) => {
  const days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    return days[date.getDay()];
};
console.log(fn(date));
