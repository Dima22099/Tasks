// Дан инпут и кнопка. В инпут через запятую вводятся числа. По нажатию на кнопку проверьте, 
// есть ли среди введенных число 13.

const btn = document.querySelector('.btn');
const paragraph = document.querySelector('.paragraph');
const input = document.querySelector('.inp');

btn.addEventListener('click', (e) => {
    const inputValue = input.value.split(',').map(Number);
    let found = false;
    for (let i = 0; i < inputValue.length; i += 1) {
        if(Number(inputValue[i]) === 13) {
            found = true;
            break;
        }
    }

    if (found) {
        paragraph.textContent = 'Is there a number 13' + ' Yes!';  
    } else {
        paragraph.textContent = 'Is there a number 13' + ' No!';  
    }
});
                