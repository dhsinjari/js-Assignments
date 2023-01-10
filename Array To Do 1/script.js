
console.log('Exercise 1:');

function pushFront(arr, val) {
    arr.unshift(val);
    return arr;
  }

  console.log(pushFront([5, 7, 2, 3], 8));  // [8, 5, 7, 2, 3]
  console.log(pushFront([99], 7));  // [7, 99]

console.log('Exercise 2:');

function popFront(arr) {
    var removed = arr.shift();
    console.log(arr);
    return removed;
}
console.log(popFront([0,5,10,15]));
console.log(popFront([4,5,7,9]));

console.log('Exercise 3:');

function insertAt(arr, index, val) {
    arr.splice(index, 0, val);
    return arr;
}
console.log(insertAt([100,200,5], 2, 311));
console.log(insertAt([9,33,7], 1, 42));

console.log('Extra 1:');

function removeAt(arr, index) {
    var removed = arr.splice(index, 1);
    console.log(arr);
    return removed[0];
}
console.log(removeAt([1000,3,204,77], 1));
console.log(removeAt([8,20,55,44,98], 3));


