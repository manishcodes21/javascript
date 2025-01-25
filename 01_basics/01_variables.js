const accountId = 2333;
let accountEmail="manishchandolu@gmail.com";
var accountPassword="123";

//js can detect the type of the variable. It is called as dynamic typing.
// but it is not recommended to use dynamic typing. It is better to use static typing(means mentioning the type of the cvarriable).
//static typing is not possibele in js but it is possible in typescript


accounCity="Hyderabad";
//accounCity is not declared but still it is working.It is assigned to glbal object called as window object in browser.

// accountId=1; not allowed
accountEmail="xyz@gmail.com";
accountPassword="1234";
accounCity="Bangalore";
let accountState;
//when we print accountState it will be undefined.

console.table([accountId,accountEmail,accountPassword,accounCity,accountState]);
//console.table is used to print the data in a table format.

/* 
Why var and let ? Earlier javascript used to have scope problem . Scope means { }. what ever code is being used
insider the {} belong to that scope. var is function scoped and let is block scoped.

Note: Prefer not to use var. Use let and const. because var has scope problem.
*/