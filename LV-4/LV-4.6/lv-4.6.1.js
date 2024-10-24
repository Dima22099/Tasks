// Сделайте функцию, которая параметром будет принимать дату в формате год-месяц-день,
//  и определять, существует ли такая дата или нет.

const date = '2012.12.32';

const doesSuchDate = (date) => {
    const dateObj = {
        '01' : { days: 31, },
        '02' : { days: 29, },
        '03' : { days: 31, },
        '04' : { days: 30, },
        '05' : { days: 31, },
        '06' : { days: 30, },
        '07' : { days: 31, },
        '08' : { days: 31, },
        '09' : { days: 30, },
        '10' : { days: 31, },
        '11' : { days: 30, },
        '12' : { days: 31, },
    };
    const month = date.split('.')[1];
    const day = date.split('.')[2];
    if (dateObj[month].days >= day) {
        return true;
    }
    return false;
} 
console.log(doesSuchDate(date));
