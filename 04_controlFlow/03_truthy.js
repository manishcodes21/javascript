const userName=[]

if(userName){
    console.log("You are logged in")
}
else{
    console.log("Please login")
}

//falsy values
// false,0,-0 ,(BigInt)0n,"",null,undefined,NaN

//truthy values
// all else are truthy values
//"0","false"," ",[],{},function(){},Infinity,-Infinity

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined
// ?? is used for checking null and undefined values
let val1;
// val1 = 5 ?? 10 //output 5
// val1 = null ?? 13 // output
// val1 = undefined ?? 15 // output 15
val1 = null ?? 10 ?? 20 // output 10



console.log(val1);

// Terniary Operator

// condition ? true : false

// const iceTeaPrice = 100
// iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")