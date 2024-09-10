//primitive
//7 types; string, number, boolean, null, undefined, symbol, bigint
//these data types are passed as call by value
let s1=Symbol("manish");
let s2=Symbol("manish");
console.log(s1===s2); // output : false
//symbol is a unique value and it is used as object property key 
//bigint
//used to store large numbers
let bi=76578346534975943n


// Non primitive or reference data types
// array, object, function

const arr=["dfasfd",3,true,"fds"];
let obj={
    name:"manish",
    age:20
}
//null datatype is object
const myFunc=function(){
    console.log("hello");
}

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object



//javascript is a dynamically typed language means varuable type is determined at runtime
let val=10;
console.log(typeof val); // output : number
val="manish";
console.log(typeof val); // output : string


