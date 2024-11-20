// Сделайте функцию, которая параметром будет 
// принимать слово и возвращать массив его слогов.

const word = 'motto';
const getSyllable = (word) => {
    const result = [];
    const syllable = ['A', 'E', 'I', 'O','U', 'Y'];
    const temp = word.split('').reduce((acc, char, i) => {
      if (syllable.includes(char.toUpperCase())) {
        acc.push(i);
      }
      return acc;
    }, []);
  
    for (let i = 0; i <= temp.length; i += 1) {
        if (syllable.includes(word[i].toUpperCase())) {
                result.push(word.slice(0, i+1));
        } else {
            result.push(word.slice(i));   
        }
    }
    return result;
};
console.log(getSyllable(word));