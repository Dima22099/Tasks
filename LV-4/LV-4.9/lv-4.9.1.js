// Сделайте функцию, которая будет возвращать сколько дней осталось до ближайшего 29 февраля.

const Feb29 = () => {
  for (let i = 0; i <= 5; i += 1) {
    const date = new Date().getFullYear() + i;
    if (new Date(date, 01, 29).getDate() === 29) {
      return ((new Date(date, 01, 29) - Date.now()) / 1000 / 60 / 60 / 24);
    }
  }
  return;
};
console.log(Feb29());