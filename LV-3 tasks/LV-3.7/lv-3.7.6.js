// Дан массив с числами. После каждого однозначного числа вставьте еще такое же.

const arr = [1,2,3,5,7,8,9,10,11,12,23,23,2336];

const fn = (arr) => {
    const result = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (String(arr[i]).length === 1) {
            result.push(arr[i], arr[i])
        }
    }
    return result;
};
console.log(fn(arr));
