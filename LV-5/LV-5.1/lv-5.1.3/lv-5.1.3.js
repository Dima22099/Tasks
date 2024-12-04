// Дан абзацы с числами, абзац и кнопка. По нажатию на кнопку найдите сумму значений 
// абзацев и запишите ее в абзац.
const paragraph1 = document.querySelector('#p1');
const paragraph2 = document.querySelector('#p2');
const paragraph3 = document.querySelector('#p3');
const button = document.querySelector('#btn1');
const nums1 = paragraph1.textContent.split(';').map(Number);
const nums2 = paragraph2.textContent.split(';').map(Number);

button.addEventListener('click', () => {
    paragraph3.textContent = '';
    paragraph3.append(getSumAllParagraph(nums1, nums2));
});

const getSumAllParagraph = (num1, num2) => num1.reduce((acc, e) => acc + e, 0) + num2.reduce((acc, e) => acc + e, 0);
