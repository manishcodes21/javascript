const myNums=[1,2,3,4,5,6,7,8,9,10,11]

// filter method
// almost same like forEach but here the callback function return values
const val=myNums.filter((item)=>{
     return item>5;
})
console.log(val) 

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userBooks = books.filter((bk) => bk.genre === "History");

userBooks = books.filter((bk) => {
  return bk.publish >= 1995 && bk.genre === "History";
});
console.log(userBooks);

//map

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumers.map( (num) => { return num + 10})
//call back function can have three parameters
//.map((value,index,array)=>{return value+10})

//chaning map and filter 
const newNums = myNumers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);

console.log(newNums);
// difference between map and filter is that map returns the same number of elements as the original array
//filter returns the elements that meet the condition

//reduce
const myNumss = [1, 2, 3];
//reduce takes two parameters ,first is the callback function and second is the initial value
//callback function can take upto four values ,accumulator, current value, current index and array
//reduce is used to reduce the array to a single value
// initially the accumulator is the initial value and in the next iteration it is the value returned by the callback function
// the initial value is optional
const myTotal = myNumss.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)
// here at first acc is 0 and currval is 1 so the function returns 0+1=1
// now 1 is the acc and 2 is the currval so the function returns 1+2=3
// now 3 is the acc and 3 is the currval so the function returns 3+3=6
//output:
// acc: 0 and currval: 1
// acc: 1 and currval: 2
// acc: 3 and currval: 3
// 6

// const myTotal = myNumss.reduce((acc, curr) => acc + curr, 0);

console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay);