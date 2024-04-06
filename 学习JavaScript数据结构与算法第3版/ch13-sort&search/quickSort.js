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

// Standard version
const quickSort = (arr) => {
  return quick(arr, 0, arr.length - 1);
};

const quick = (arr, leftIndex, rightIndex) => {
  if (leftIndex < rightIndex) {
    const pivotIndex = partition(arr, leftIndex, rightIndex);
    quick(arr, leftIndex, pivotIndex - 1);
    quick(arr, pivotIndex + 1, rightIndex);
  }
  return arr;
};

const partition = (arr, leftIndex, rightIndex) => {
  const pivotIndex = leftIndex;
  leftIndex++;
  while (leftIndex <= rightIndex) {
    while (leftIndex <= rightIndex && arr[leftIndex] < arr[pivotIndex]) {
      leftIndex++;
    }
    while (leftIndex <= rightIndex && arr[rightIndex] >= arr[pivotIndex]) {
      rightIndex--;
    }
    if (leftIndex < rightIndex) {
      [arr[leftIndex], arr[rightIndex]] = [arr[rightIndex], arr[leftIndex]];
      leftIndex++;
      rightIndex--;
    }
  }
  [arr[rightIndex], arr[pivotIndex]] = [arr[pivotIndex], arr[rightIndex]];

  return rightIndex;
};

console.log(quickSort(arr));
