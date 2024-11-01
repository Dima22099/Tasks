// Сделайте функцию, которая параметром будет принимать дату в формате год-месяц-день,
//  и определять, существует ли такая дата или нет.
const date = '2012.12.31';
    
const doesSuchDate = (date) => {
  const [year, month, day] = date.split('.').map(Number); 
  if (month < 1 || month > 12) {
    return false;
  }
  const dateObj = new Date(year, month - 1, day);
    return dateObj.getFullYear() === year && dateObj.getMonth() === month - 1 && dateObj.getDate() === day;
} 
console.log(doesSuchDate(date));