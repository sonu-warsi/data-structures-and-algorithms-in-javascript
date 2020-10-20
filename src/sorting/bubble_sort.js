const array = [1, 2, 2, 3, 3, 4, 5, 6, 2, 3, 7, 8, 5, 22, 1, 2, 511, 12, 50, 22]

//Type 1
function bubbleSort(array) {
    let i, j;
    for (i = 0; i < array.length; i++){
        for (j = i + 1; j < array.length; j++){
            if (array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

//Type 2 optimised space by array destructuring
function bubbleSort(array) {
    let i, j;
    for (i = 0; i < array.length; i++){
        for (j = i + 1; j < array.length; j++){
            if (array[j] > array[j+1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    return array;
}

//Type 3
const bubbleSort = array  => {
    let i, j;
    for (i = 0; i < array.length - 1; i++){
        let swapped = true;
        for (j = 0; j < array.length - 1 - i; j++){
            if (array[j] > array[j+1]) {
                [array[j], array[j+1]] = [array[j+1], array[j]]
                swapped = false;
            }
        }
        if (swapped === true) break;
    }
    return array;
}

//Type 4
const bubbleSort = array  => {
    let j;
    let swaped = true;
    while (swaped) {
        for (j = 0; j < array.length - 1; j++){
            if (array[j] > array[j+1]) {
                [array[j], array[j+1]] = [array[j+1], array[j]]
                swaped = false;
            }
        }
        if (swaped === true) {
            break;
        }
    } return array;
}

//Type 5
const bubbleSort = array  => {
    let j;
    let num;
    let len = array.length;
    while (num) {
        num = 0;
        for (j = 0; j < array.length - 1; j++){
            if (array[j] > array[j+1]) {
                [array[j], array[j+1]] = [array[j+1], array[j]]
                num = j;
            }
        }
        if (num === 0) {
            break;
        }
        len = num;
    } return array;
}

console.log(bubbleSort(array))