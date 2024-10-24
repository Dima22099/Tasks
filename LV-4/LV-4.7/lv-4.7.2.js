// Сделайте функцию, которая параметром будет принимать два массива и возвращать массив 
// их общих элементов.

const arr1 = [7, 8, 9, 10, 2, 3, 4, 55, 6,];
const arr2 = [2, 4, 55, 6, 8, 10];


const getArrayCommonEl = (arr1, arr2) => {
    const result = [];
    const whichOneIsLonger = arr1 > arr2 ? arr1 : arr2;  
    const whichIsShorter = arr1 < arr2 ? arr1 : arr2;
    for (let i = 0; i <= whichIsShorter.length; i += 1) {
        if (whichOneIsLonger.includes(whichIsShorter[i])) {
            result.push(whichIsShorter[i])
        }
    }
    return result;
};
console.log(getArrayCommonEl(arr1, arr2));
