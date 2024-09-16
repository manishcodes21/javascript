const user={
    userName:"Manish",
    age:30,
    welcomeMessage:function(){
        // this here is user
        // console.log(`Welcome ${this.userName}`); 
        // console.log(this)
    }
}
user.welcomeMessage()
// console.log(this) //output: {} // this here is global object in nodejs

// IMportant
//global object in browser is window 


// function chai(){
//      username="manish"
//     console.log(this.username) // output:manish , if we dont use var then it will be attached to global object
//     //in case of node js global object is global and in browser it is window

// }
// chai()
// function chai(){
//      var username="manish"
//     console.log(this.username) // output:undefined because as we used var it became function scoped so global object is not able to access it
// }
// chai()
const func=()=>{    
    username="manish"
    console.log(this.username) //output:undefined because arrow function does not have its own this so it will take this from its parent function
}
func()

//implicit return
const addTwo=(num1,num2)=>num1+num2
console.log(addTwo(1,2)) //output:3
const fun=(num1,num2)=>(num1*num2) // no need of return if we use paranthesis
//explicit return
// const addTwo=(num1,num2)=>{
//     return num1+num2
// }


