// Дан инпут и кнопка. В него вводится число из шести цифр. 
// По клику на кнопку проверьте, что число представляет собой счастливый билет, 
// то есть сумма первых трех цифр равна сумме вторых трех цифр.


const input = document.querySelector('.inp');
const btn = document.querySelector('.btn');
const paragraph = document.querySelector('.paragraph');

btn.addEventListener('click', (e) => {
    const inputValue = input.value;
    const firstThreeNum = inputValue.slice(0, 3).split('').reduce((acc, item) => acc + Number(item), 0);
    const secondThreeNum = inputValue.slice(3).split('').reduce((acc, item) => acc + Number(item), 0);
    paragraph.textContent = 'lucky number or not? ' + (firstThreeNum === secondThreeNum) + '!';
});