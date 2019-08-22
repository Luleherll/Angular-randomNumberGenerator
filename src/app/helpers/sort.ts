const partition = (arr, left, right) => {
  const pivot = arr[left];
  let i = left;

  for (let j = left + 1; j <= right; j++) {
    if (arr[j] > pivot) {
      i = i + 1;
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
}
  const temp = arr[i];
  arr[i] = arr[left];
  arr[left] = temp;

  return i;
};

export const quickSort = (arr, left, right) => {
  if (left < right) {
    const q = partition(arr, left, right);
    quickSort(arr, left, q);
    quickSort(arr, q + 1, right);
  }

  return arr;
};
