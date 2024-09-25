//for of

const arr=[1,2,3,4,5];
for (const i of arr){
    console.log(i);
    // we get the value of the arr
}

//Maps
const map =new Map();
map.set('b',2);
map.set('a',1);
//keys are unique and are order based on the insertion order ,but not in sorted order
for(const [key,value] of map){
    console.log(key+" "+value);
}

const obj={
    game1:"football",
    game2:"cricket",
}
//for of doesnt work for iterating on objects
// for(const [game,value] of obj){
//     console.log(game+" "+value); // cant iterate like this
// }



//for in loop

//for in loop is used to iterate over the properties of an object
// for in loop gives key
//in case of array key is index
//this dont work map bcuz maps are not iterable
//give example
const obj1={
    game1:"football",
    game2:"cricket",
}
for(const game in obj1){
    console.log(game +":"+ obj1[game]);
    // console.log(obj1[game]);
}
for(const i in arr){
    console.log(i,arr[i]);
    // we get the index of the array
}

//for each loop
const coding=["java","python","javascript"];

// inside the function the parameters are value,index,array
coding.forEach(function(item,itemIndex){
    console.log(itemIndex, item);
})
coding.forEach((item,itemIndex)=>{
    console.log(itemIndex, item);
})

// works on array of objects too
const coding1=[
    {name:"java",type:"backend"},   
    {name:"python",type:"backend"},
    {name:"javascript",type:"frontend"},
];
const val=coding1.forEach((item,index)=>{
    console.log( item.name,item.type);
   return item
})
// for each loop doesnt return anything
console.log(val); // output:undefined


