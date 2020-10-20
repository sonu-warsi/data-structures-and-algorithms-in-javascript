const array = [1, 2, 2, 3, 3, 4, 5, 6, 2, 3, 7, 8, 5, 22, 1, 2, 511, 12, 50, 22];

//Type 1
const insertion_sort = array => {
    let i,j;
    for (i = 1; i <= array.length-1; i++){
        j = i;
        while (j !== -1 && array[j-1] > array[j] ) {
            [array[j - 1], array[j]] = [array[j], array[j - 1]];
            j -=1
        };
    };
  return array;
};

// Type 2
const insertion_sort = array => {
    for (let i = 1; i <= array.length-1; i++) {
      let j = i - 1
      let tmp = array[i]
      while (j >= 0 && array[j] > tmp) {
        array[j + 1] = array[j]
        j--
      }
      array[j+1] = tmp
    }
  return array;
  }

console.log(insertion_sort(array))
