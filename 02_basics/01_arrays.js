// SUMMARRY:

// 1. Array is written in brackets [  ].
// 2.Array data type is an object.
// 3.Array can contain different data types . i.e string,number,boolean,array etc.
// 4. Array is zero based indexing. It starts with zero.
// 5. Once changed its original value will also change beacause it is non primitive (refrence) type.

// ARRAY METHODs :

// 1.Push = adds value to last of an array.
// 2. Pop = removes last value of an array.
// 3. Unshift = adds value at first of an array.
// 4.Shift = removes first value of an array.
// 5. Includes = checks true or false.
// 6. IndexOf = checks the position of value in number form.
// 7.Join = converts to string.
// 8. Slice(value to remove from,value remove upto but don't include )= returns new array and original value remains unchanged. Use when you need to extract a portion of an array without modifying it.
// 9. Splice(value to delete from, number of value to delete) = returns new array with deleted one and original value changed.Use when you need to add, remove, or replace elements within an array.

let arr=[1,2,3,4]
let arr2=[5,6,7]
arr.push(arr2);
// console.log(arr) // output : [ 1, 2, 3, 4, [ 5, 6, 7 ] ]
arr.pop();
let arr3=arr.concat(arr2);
console.log(arr3) // output : [ 1, 2, 3, 4, 5, 6, 7 ]
let arr4=[...arr3,8,9,10]; //output : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

const arr5=[1,2,3,[4,5,6],[7,[8,9]]];
console.log(arr5.flat(2))//parameter is depth

console.log(Array.isArray(arr5)) // output : true
console.log(Array.from('hello')) // output : [ 'h', 'e', 'l', 'l', 'o' ]
console.log(Array.from({name:"manish"})) // output : [] because it get confusedd whether to convert the key pr value


