// const tinderUser = new Object()
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "hitesh",
      lastname: "choudhary",
    },
  },
};

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = { obj1, obj2 }

//Object.assign(target,source) return a object with source object merged with target object
//{} is used as target object, obj1 is target object and obj2,obj4 is source object
// const obj3 = Object.assign({}, obj1, obj2, obj4)

//using spread operator
const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
];

users[1].email;
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // output : [ 'id', 'name', 'isLoggedIn' ] ,datatype is array
// console.log(Object.values(tinderUser));// output : [ '123abc', 'Sammy', false ] ,datatype is array
// console.log(Object.entries(tinderUser));// output : [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ] ,datatype is array

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // output : true

//object destructuring 
const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh",
};

// course.courseInstructor
//{actual name: new name}=object name
const { courseInstructor:instructor} = course;

console.log(courseInstructor); //output : hitesh
// console.log(instructor);//output : hitesh

//json structure is same as object but the key is always in double quotes
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[{}, {}, {}];

//json formatter can be used to understand the structure of the api respoonse

