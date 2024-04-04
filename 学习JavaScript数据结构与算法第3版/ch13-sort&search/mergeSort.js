const arr = [5, 3, 4, 1, 2];

const mergeSort = (arr) => {
  if (arr.length > 1) {
    const mid = Math.floor(arr.length / 2);
    return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
  }
  return arr;
};

const merge = (leftArr, rightArr) => {
    let i = 0, j = 0;
    const arr = [];
    while (i < leftArr.length && j < rightArr.length) {
        arr.push(leftArr[i] > rightArr[j] ? rightArr[j++] : leftArr[i++]);
    }
    return arr.concat(leftArr.slice(i), rightArr.slice(j));
};

console.log(mergeSort(arr));