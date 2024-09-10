const accountId = 2333;
let accountEmail="manishchandolu@gmail.com";
var accountPassword="123";

//js can detect the type of the variable. It is called as dynamic typing.
// but it is not recommended to use dynamic typing. It is better to use static typing.
accounCity="Hyderabad";
// accountId=1; not allowed
accountEmail="xyz@gmail.com";
accountPassword="1234";
accounCity="Bangalore";
let accountState;
//when we print accountState it will be undefined.

console.table([accountId,accountEmail,accountPassword,accounCity,accountState]);

/* 
Why var and let ? Earlier javascript used to have scope problem . Scope means { }. what ever code is being used
insider the {} belong to that scope. var is function scoped and let is block scoped.

Note: Prefer not to use var. Use let and const. because var has scope problem.
*/