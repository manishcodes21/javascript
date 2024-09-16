// singleton
// Object.create

// the below are object literals

const mySym = Symbol("key1");

//in object key is also stroed as string
// "full name":"manish" is same as full name:"manish"
// coming to symbol it is unique and it is not stored as string
//we have to use [] to access the symbol key
// if we just write mySym:"myje" then mySym is stored as string
//[mySym] is symbol

const JsUser = {
  name: "Hitesh",
  "full name": "Hitesh Choudhary",
  [mySym]: "mykey1",
  age: 18,
  location: "Jaipur",
  email: "hitesh@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

//diff types to access the value
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com";
// Object.freeze(JsUser) is used to make the object immutable
JsUser.email = "hitesh@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function () {
   console.log("Hello JS user");
};
JsUser.greetingTwo = function () {
    // this tells which object is calling the function
     console.log(`Hello JS user, ${this.name}`);
};

JsUser.greeting()
JsUser.greetingTwo()


//singleton Obejct
//only one instance of object is created
const SingleTon=new Object();
SingleTon.name="manish";
const temp=new Object();
temp.name="manish kumar";
console.log(SingleTon.name)