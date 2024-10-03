// Дан следующий объект:

let obj = {
	1: {
		1: 11,
		2: 12,
		3: 13,
	},
	2: {
		1: 21,
		2: 22,
		3: 23,
	},
	3: {
		1: 24,
		2: 25,
		3: 26,
	},
}
// Найдите сумму элементов этого объекта.
const fn = (obj) => {
        let result = 0;
  for (elem of Object.values(obj)) {
    for (el of Object.values(elem)) {
      result += el;
    }
  }
  return result;
};
console.log(fn(obj));