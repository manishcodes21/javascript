let name="manish";
let age=20;
//old way to concatinate the strings
// console.log("My name is "+name+" and my age is "+age);
// //new way to concatinate the strings is using string interpolation
// console.log(`My name is ${name} and my age is ${age}`);

//string as object
let str=new String("manish");
// console.log(str); // output : String {"manish"}

//string methods    
//try priting string object on browser console and you can check all the methods over there
let temp="Algebrae"
// console.log(temp.toLowerCase());
// console.log(temp.charAt(2)); // output : e
// console.log(temp.indexOf("e")); // output : 3
// console.log(temp.lastIndexOf("e")); // output : 6
//temp=algebrae
let newStr=temp.substring(2,5); // output : geb
//slice(startIndex,endIndex) => endIndex is exclusive
let anoStr = temp.slice(1, 4); // output : lge
let substr=temp.slice(-5,-1); // output : ebra
// console.log(newStr);
// console.log(anoStr);
// console.log(substr)

let newString="     manish   ";
// console.log(newString.trim()); // output : manish 
//trim is used to remove the white spaces from the start and end of the string
//trimStart() and trimEnd() are used to remove the white spaces from the start and end of the string respectively

// usually broser doesnt recognize the spaces in the url so we use encodeURI() and decodeURI() methods
//space is encoded as %20
// but now if we want the name entered then
const url="https://www.google.com/manish%20chandolu";
console.log(url.replace("%20",'-'))
console.log(url.includes("manish")); // output : true
//split is used to split the string based on the given character and returns an array
//split(character,limit) => limit is optional
console.log(url.split('.',2)) // output : ["https://www", "google", "com/manish%20chandolu"]
//string can be converted to array using split with seperator as empty string





