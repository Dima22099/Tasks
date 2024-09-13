    // Дан некоторый массив, например, вот такой:

    // [1, 2, 3, 4, 5, 6]
    // Найдите сумму первой половины элементов этого массива.
    const arr = [1, 2, 3, 4, 5, 6];

    const fn = (arr) => {
        let result = 0;
        for (let i = 0; i < arr.length / 2; i ++) {
            result += arr[i]
        }
        return result;
    };
    console.log(fn(arr));