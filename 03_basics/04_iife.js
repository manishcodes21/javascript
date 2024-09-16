// Immediately invoked function expression(IIFE)
// these are used to call the function immediately and also used to prevent global
//namespace pollution

(function greet(){
        msg="Hi"
        console.log(msg);
    })();
    //remember to use semicolon as sometimes compiler dont know when to stop executing the funciton
    console.log(msg);
//()() first () is used to write function expression and second () is used to call the function

//Earlier before ES6(let and const are introduced in ES6) ,IIFE are used to make variables 
//block scoped
//After ES6 let and const take care of them but still we use IIFE so that
//variables wont leak 
