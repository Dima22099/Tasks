// Дан инпут, кнопка и абзац. В инпут вводится дата в формате 2025-12-31. 
// По нажатию на кнопку выведите в абзац день недели, соответствующий этой дате.

const input = document.querySelector('.inp');
const btn = document.querySelector('.btn');
const paragraph = document.querySelector('.paragr');

const getWeekDay = (day) => weekDay[day];
const weekDay = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ',];

btn.addEventListener('click', (e) => {
    const date = new Date(input.value.split('-').join(', '));
    paragraph.textContent = getWeekDay(date.getDay());
});