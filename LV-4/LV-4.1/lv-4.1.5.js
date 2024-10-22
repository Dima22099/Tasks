// Сделайте функцию, которая параметром будет получать дату,
//  а возвращать знак зодиака, соответствующий этой дате.

const date = '24.06.1991';

const findOutZodiacSign = (date) => {
  const [day, month] = date.split('.');
  const zodiacSign = {
    '01': { borderDay: 20, before: 'Козерог', after: 'Водолей', },
    '02': { borderDay: 19, before: 'Водолей', after: 'Рыбы', },
    '03': { borderDay: 20, before: 'Рыбы', after: 'Овен', },
    '04': { borderDay: 20, before: 'Овен', after: 'Телец', },
    '05': { borderDay: 21, before: 'Телец', after: 'Близнецы', },
    '06': { borderDay: 22, before: 'Близнецы', after: 'Рак', },
    '07': { borderDay: 23, before: 'Рак', after: 'Лев', },
    '08': { borderDay: 23, before: 'Лев', after: 'Дева', },
    '09': { borderDay: 23, before: 'Дева', after: 'Весы', },
    '10': { borderDay: 23, before: 'Весы', after: 'Скорпион', },
    '11': { borderDay: 23, before: 'Скорпион', after: 'Стрелец', },
    '12': { borderDay: 23, before: 'Стрелец', after: 'Козерог', },
  };
  if (zodiacSign[month].borderDay > day) {
    return zodiacSign[month].before;
  } 
    return zodiacSign[month].after;
  
};
console.log(findOutZodiacSign(date));