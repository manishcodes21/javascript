console.log("2">1); // output : true
//when two different datatypes are compared then they are converted 
// here string is converted to number

//below null is converted to 0  
console.log(null>0); // output : false
console.log(null>=0); // output : true

//in javascript >,<,>=,<==,==,=== are relational  operators
// int the above case null is converted to 0


// (loose equality) == is used for value comparison
// (strict equality) === is used for value and datatype comparison    
console.log(null==0); // output : false