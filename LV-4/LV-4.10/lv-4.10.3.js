// Дан текст со словами. Запишите все слова этого текста в специальный объект. 
// Ключами в этом объекте будут буквы, 
// а значениями - массивы слов, начинающихся на эти буквы.

const str = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente et odio vitae illo, beatae debitis?';

const getObjString = (str) => {
    const resultObj = {};
    const temp = str.split(' ');
    for (let i = 0; i < temp.length; i += 1) {
        const word = temp[i].replace(/[.,?]/g, '');
        const firstLetter = word[0].toLowerCase(); 
        if (!resultObj[firstLetter]) { 
            resultObj[firstLetter] = [];
        }
        resultObj[firstLetter].push(word);
    }
    return resultObj;
};
console.log(getObjString(str));
