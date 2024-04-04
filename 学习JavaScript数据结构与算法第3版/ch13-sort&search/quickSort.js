const arr = [5, 3, 4, 1, 2];


// Simple version
const simpleQuickSort = (arr) => {
  if (arr.length > 1) {
    const pivotValue = arr[0];
    const leftArr = [];
    const rightArr = [];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > pivotValue) {
        rightArr.push(arr[i]);
      } else {
        leftArr.push(arr[i]);
      }
    }
    return [
      ...simpleQuickSort(leftArr),
      pivotValue,
      ...simpleQuickSort(rightArr),
    ];
  }
  return arr;
};

// 

console.log(simpleQuickSort(arr));