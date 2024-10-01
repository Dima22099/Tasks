// Даны два массива:
const arr2 = [1, 2, 3, 5, 7, 8, 9];
const arr1 = [1, 2, 3, 4, 5];
// Удалите из большего массива лишние элементы с конца так, чтобы длины массивов стали одинаковыми.
const fn = (arr1, arr2) => {
	const isFirstLonger = arr1.length > arr2.length;
	if (isFirstLonger) {
		return arr1.slice(0, arr2.length);
	}
		return arr2.slice(0, arr1.length);
}
console.log(fn(arr1, arr2));