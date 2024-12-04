// Дан массив, кнопка и инпут. Сделайте так, чтобы по клику на кнопку в инпут выводился 
// случайный элемент массива.

const btn = document.querySelector('.btn');
const input = document.querySelector('.inp');
const arrNumbers = [12, 23, 56,655, 98, 87, 878, 123, 320];
const paragraph = document.querySelector('.paragraphNumbers');
paragraph.textContent = [...arrNumbers];

const getRandomNum = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

btn.addEventListener('click', (e) => {
    input.value = arrNumbers[getRandomNum(0, arrNumbers.length - 1)];
});