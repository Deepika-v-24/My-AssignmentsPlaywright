function intersection(arr1, arr2) {
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      if (!result.includes(arr1[i])) {
        result.push(arr1[i]);
      }
    }
  }
  return result;

}
console.log(intersection([1, 2, 5, 4], [3, 4, 5]));