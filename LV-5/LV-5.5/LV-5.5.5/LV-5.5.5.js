// Дан инпут и абзац. В инпут вводится строка со словами. 
// По потери фокуса выведите в абзац количество слов во введенной строке.

const input = document.querySelector('.inp');
const paragraph = document.querySelector('.paragr');

input.addEventListener('blur', (e) => {
    paragraph.textContent = input.value.split(' ').length; 
})
 