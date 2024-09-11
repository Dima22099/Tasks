// Дано слово. Получите его последнюю букву.
//  Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.

const fn = (word) => {
    let result = '';
        if (word[word.length - 1] === 'ь') {
            result += word[word.length - 2];
        } else {
            result += word[word.length - 1]
    }
    return result;
}
fn('обь');