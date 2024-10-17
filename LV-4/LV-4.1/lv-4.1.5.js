// Сделайте функцию, которая параметром будет получать дату,
//  а возвращать знак зодиака, соответствующий этой дате.

const date = '09.01.1991';

const fn = (date) => {
    const zodiacSign = [
        [['Водолей'], [20.01, 18.2]], //20 - 36
        [['Рыбы'], [19.2, 20.3]], // 38 - 60
        [['Овен'], [21.3, 19.4]],
        [['Телец'], [20.4, 20.5]],
        [['Близнецы'], [21.5, 21.6]],
        [['Рак'], [22.6, 22.7]],
        [['Лев'], [23.7, 22.8]],
        [['Дева'], [23.8, 22.9]],
        [['Весы'], [23.9, 22.10]],
        [['Скорпион'], [23.10, 22.11]],
        [['Стрелец'], [23.11, 21.12]],
        [['Козерог'], [22.12, 19.1]]
    ];
    const day = date.split('.')[0];
    const month = date.split('.')[1];
    return zodiacSign.reduce((acc, el) => {
      
      let searchFromDay = Number(el[1].join('.').slice(0, 2));
      let searchToDay = Number(el[1].join('.').slice(5, 8));
        if (searchToDay < 1) {
           searchToDay = Number(el[1].join('.').slice(5, 8).slice(1));
        }      
      let searchFromMonth = Number(el[1].join('.').slice(3, 5));
      let searchToMonth = Number(el[1].join('.').slice(8));
        if (searchToMonth < 1) {
          searchToMonth = Number(el[1].join('.').slice(8).slice(1));
        }
      if (month <= searchFromMonth && month >= searchToMonth) {
        if (day <= searchFromDay && day <= searchToDay) {
            acc += el[0];
        }
      }
      return acc;
    }, '');
};
console.log(fn(date));