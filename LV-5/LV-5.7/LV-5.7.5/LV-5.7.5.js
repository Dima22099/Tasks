// В инпут вводится число из 6-ти цифр. По нажатию на кнопку проверьте, 
// равна ли сумма первых трех цифр сумме вторых трех цифр.

const btn = document.querySelector('.btn');
const inputValue = document.querySelector('.inp');
btn.addEventListener('click', (e) => {
    const firstThreeNum = [...inputValue.value.slice(0, 3)].reduce((acc, i) => acc + Number(i), 0);
    const secondThreeNum = [...inputValue.value.slice(3)].reduce((acc, i) => acc + Number(i), 0);
    const paragraph = document.createElement('p');
    paragraph.textContent = firstThreeNum === secondThreeNum;
    document.body.appendChild(paragraph);
});