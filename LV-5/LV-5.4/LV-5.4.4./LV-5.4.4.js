// Даны три абзаца. Выведите в первый текущий год, во второй - текущий месяц, 
// в третий - текущий день.

const date = new Date();
const getDateArray = [date.getFullYear(), date.getMonth() + 1, date.getDay(),];
const arrDateName = ['Count year: ', 'Count month: ', 'Count day: '];
[...document.querySelectorAll('p')].forEach((item, i) => item.textContent = arrDateName[i] + getDateArray[i]);