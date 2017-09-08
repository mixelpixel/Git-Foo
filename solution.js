const arr = ['Patrick', 'Tyge', 'Jake', 'Antonio', 'Sarah'];

const each = (someArray, cb) => {
  for (let i = 0; i < someArray.length; i++) {
    cb(someArray[i], i);
  }
}

each(arr, (item, index) => {
  console.log(`item ${item}, can be found at index ${index}`);
});
