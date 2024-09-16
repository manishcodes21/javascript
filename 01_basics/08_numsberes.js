let num=new Number(100)
//toFixed() is used to fix the number of decimal points
console.log(num.toFixed(2)); // output : 100.00
const otherNum=122.345;
console.log(otherNum.toPrecision(4)); // output : 122.3


//math
// console.log(Math.abs(-100)); // output : 100
// console.log(Math.ceil(10.1)); // output : 11
// console.log(Math.floor(10.9)); // output : 10
// console.log(Math.round(10.5)); // output : 11
// console.log(Math.max(10,20,30,40)); // output : 40

//random number
console.log(Math.random()); // output : random number between 0 and 1(exclusive)
//code to generate random number between min and max
let max=20,min=10;
console.log(Math.floor(Math.random()*(max-min+1)+min)); // output : random number between min and max
//max-min is used to get the range of numbers and +1 is used to include the max number also
//ex if math.random genrated 0.999 and range is 30 after multiplication it will be 29.97 so floor will make it 29
//so in order to include max we are adding 1 and also we are adding min at last to get the number in the range
//ex if min is 10 and max is 20 then 0.999*11+10=20.989 so floor will make it 20