// {} is called as block scope 
// like in fucntion ,conditional loops,loops etc..

// const and let are block scoped and var is global scoped
//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);

//innerscpoe can access outer scope but outer scope cannot access inner scope
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++
//hoisting is a javascript mechanism where variables and function declarations are moved to the top of their scope before code execution

//const temp; //this is declaration
//temp=10; //this is initialization
// javascript hoisting is only applicable to declaration and not to initialization


console.log(addone(5)) // output : 6

//here function is declared after the function call but still it is working because of hoisting
function addone(num){
    return num + 1
}


console.log(addTwo(5)) // output : error
//here addTwo declaration is hoisted but not its initialization
// here in this case initialization is function declaration

const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5)) // output : 7