// Дан инпут, абзац и кнопка. В инпут вводится число. По нажатию на кнопку 
// получите массив делителей числа и выведите их в абзац через запятую.

const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    document.querySelector('.text').textContent = [document.querySelector('.inp').value].reduce((acc, item) => {
        for (let i = 1; i <= item; i += 1) {
            if (item % i === 0) {
                acc += i + ', ';
            }
        }
        return acc;
    }, ''); 
})