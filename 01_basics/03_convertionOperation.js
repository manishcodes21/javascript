let score=33
console.log(typeof score,score)
let scor="33"
//typecasting or type conversion and remember first letter is capital
let value=Number(scor);
console.log(typeof scor,scor)
console.log(typeof value,value)

let marks="33fsd"
let val=Number(marks)
//Nan means not a number
//since marks is not a proper number val is giving Nan but val type is number
console.log(typeof val, val);

//"33" => 33
//"34fdsa" => Nan
//true => 1
//false => 0

let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn,booleanIsLoggedIn);

//1 => true
//0 => false
//"fdsaf" => true
//"" => false
//null => false
//undefined => false