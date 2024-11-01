// Сделайте функцию, которая параметром будет принимать два массива и возвращать массив 
// их общих элементов.

const arr1 = [7, 8, 9, 10, 2, 3, 4, 55, 6,];
const arr2 = [2, 4, 55, 6, 8, 10];


const getArrayCommonEl = (arr1, arr2) => {
    const result = [];
    const longer = arr1 > arr2 ? arr1 : arr2;  
    const shorter = longer === arr1 ? arr2 : arr1;
    for (let i = 0; i <= shorter.length; i += 1) {
        if (longer.includes(shorter[i])) {
            result.push(shorter[i])
        }
    }
    return result;
};
console.log(getArrayCommonEl(arr1, arr2));