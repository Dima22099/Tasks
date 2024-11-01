// Сделайте функцию, которая будет возвращать дату 
// следующей масленницы, которая празднуется в последнее воскресенье зимы.


const getDay = () => {
    const days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    const maslenYear = new Date().getFullYear() + 3;
  
    let maslenDay = new Date(maslenYear, 2).getDate() - 1;
    let getDay = new Date(maslenYear, 2, maslenDay).getDay();
    for (let i = 6; i >= 0; i -= 1) {
    if (days[getDay] !== 'ВС') {
        maslenDay -= 1;
        getDay -= 1;
    } else {
        return new Date(maslenYear, 2, maslenDay, + 3);
      }
    }
      return;
};
console.log(getDay());

