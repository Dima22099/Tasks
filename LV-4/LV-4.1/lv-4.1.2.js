// Сделайте функцию, которая параметром будет получать дату, 
// а возвращать день недели словом, соответствующий этой дате.

const day = '15.10.2024';

const fn = (day) => {
  const date = new Date(day.split('.').reverse().join(','));
  const days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  return days[date.getDay()]  
};
console.log(fn(day));
