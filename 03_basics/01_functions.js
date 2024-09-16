function sayMyName(){
    console.log("Manish")
}
// sayMyName(); // output : Manish
//a,b are parameters
function add(a,b){
    return a+b;
}
// 10,20 are arguments
// console.log(add(10,20)); // output : 30

//sam is default value
function loginUserMessage(username = "sam") {
  if (!username) {
    console.log("PLease enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))

// ... is called as rest operator and is used to get the rest of the arguments
function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2000)) // output : [ 500, 2000 ]


const user = {
  username: "hitesh",
  prices: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// handleObject(user)
handleObject({
  username: "sam",
  price: 399,
});

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

