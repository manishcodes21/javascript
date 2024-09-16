//dates

let myDate=new Date();
// console.log(myDate.toLocaleString());
// console.log(typeof myDate) // output : object

let myCreatedDate=new Date(2023,0,23);
// console.log(myCreatedDate.toLocaleString());
let myTimeStamp=Date.now();
console.log(myTimeStamp); //output : timestamp in milliseconds  
console.log(Math.floor(myTimeStamp/1000)) // output : timestamp in seconds

