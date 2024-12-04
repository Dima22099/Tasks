// Дан пустой список ul и текстареа. В него вводится текст со знаками препинания. 
// По потери фокуса запишите каждое предложение из текста в свой тег li.

const list = document.querySelector('.list');
const textar1 = document.querySelector('#textar1');

textar1.addEventListener('blur', (e) => {
    textar1.value.split(',').forEach(item => {
        const li = document.createElement('li');
        if (item !== '' && item !== ' ') {
            li.textContent = item;
            list.append(li);
        }
    });
});