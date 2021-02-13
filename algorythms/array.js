function sortArray(array) {
  const charArr = array.filter((e) => typeof(e) === 'string');
  const numArr = array.filter((e) => typeof(e) === 'number');
  const largestN = numArr.reduce((acc, e) => (e > acc) ? e : acc, numArr[0]);

  console.log('chars: %s', charArr);
  console.log('nums: %s', numArr);
  console.log('largest number from array: %s', largestN);
}

sortArray([ 'a', 10, 'b', 'hola', 122, 15]);
