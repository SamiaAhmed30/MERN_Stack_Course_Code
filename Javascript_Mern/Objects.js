//Object Literal  Non singleton object
// const student = {   //by using const we cannot cahnge the address of the array/obj but can cahnge the values
//     name : "Samia Ahmed", //Property 1
//     age: 23,   //Property 2
//     Marks: 94.5,  //Property 3
//     City: "Karachi"  //Property 4
// }
//we dont use " " in keys, its like a variable

// let tinderUser = new Object() //singleton object

//it has no specific order when you print obj but key value pair stay together

const item = {
  price: 100.99,
  color: ["red", "pink"], //we can store multiple values in a single key using array
  Discount: 50,
};

//Create a Twitter Post
const post = {
  username: "@samiaahmed",
  content: "This is my #firstPost",
  likes: 200,
  reposts: 10,
  tags: ["@thv", "@ily"],
};
console.log(post);
Object.freeze(post);  //freeze the obj Post, now no one can change this obj after this line


//If you created an obj and want to print a particular value of a key like age of obj student
console.log(post.content); //it prints the value of key age of obj student
console.log(item["price"]); //second syntax, best to use in case of variables

const objt = {
  1: "a",
  2: "b",
  null: "c", //it will treat it as a string not a keyword
  true: "d",
  undefined: "e",
}; //JS will convert all these keys into string automatically

objt[2]; //it is  not index no, it is a no(key) convert to string

//Add/Update values
const student = {
  name: "Samia",
  age: 23,
  marks: 98.5,
  city: "Karachi", //change city to isb
};
console.log(student);
student.city = "Islamabad"; //update value of key city from karachi to isb
student.gender = "Female"; //add a new key value pair to obj student
student.marks = "A"; //update marks from 98.5 to A
console.log(student);

//Nested Objects
//like if i want to store multiple students info in a single objects
const classInfo = {
  aman: {
    //obj1
    marks: 90,
    Grade: "A+",
    age: 20,
  },
  samia: {
    //obj2
    marks: 95,
    Grade: "A+",
    age: 22,
  },
  Nick: {
    //obj3
    marks: 67,
    Grade: "C",
    age: 21,
  },
};
classInfo.samia.city = "NYC"; //new property added in obj
console.log(classInfo.samia);
console.log(classInfo.Nick.age);

//Array of Objects: multiple objects in a single array, it can store the above info
const classI = [
  {
    //obj1    //index 0
    name :"Samia",
    marks: 90,
    Grade: "A+",
    age: 20,
  },
  {
    //obj2       //index 1
    name : "Ali",
    marks: 95,
    Grade: "A+",
    age: 22,
  },
  {                 //index 2
    //obj3
    name : "Sara",
    marks: 67,
    Grade: "C",
    age: 21,
  },
];
console.log(classI[0]);   //you can access obj by index no
console.log(classI[2].Grade);
classI[2].city= "Islamabad";  //adding city to index 2 
console.log(classI[2]);

const car = {
    name: "Porsche",
    model: 911,
    color: "black"
}

console.log(car.name)  //Print an obj key

const Person = {
    name: "Samia",
    age: 23,
    city: "Karachi"  //change it to NYC
}
Person.city = "NYC" //update to NYC
Person.Country = "United States" //add new property 
console.log(Person)


const stud ={
    name: "Samia",
    age: 21,
    grade: "A+"
}
console.log(stud.name)
console.log(stud.age)
console.log(stud.grade)
stud.gender = "Female"
delete stud.grade
console.log(stud)
stud.greeting = function (){  //add greeting via func in obj stud
    console.log("Hi user!")
}
console.log(stud.greeting())

stud.greetingTwo = function (){  //add greeting via func in obj stud
    console.log(`Hi JS user ${this.name}`) //to access the properties of objects
}
console.log(stud.greetingTwo())

const tinderUser = {};
//add properties

tinderUser.id = "123abc";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = true;
// console.log(tinderUser)

const regularUser = {
  email : "Sam@gmail.com",
  Fullname : {  //Nested
    userfullname : {
      firstname : "Samia",
      Lastname : "Ahmed"
    }
  }
}
console.log(regularUser.Fullname.userfullname)

//2 Object merge : combine diff object
const obj4 ={ 
  1: 'a',
  2: 'b'
}
const obj5 ={ 3: 'c', 4: 'd'}
const obj6 = {...obj4, ...obj5}  //combine obj using spread operator

// const obj6 = Object.assign({},obj4,obj5)  //{}--> target , obj1,ob2 --> source
console.log(obj6)

console.log(tinderUser)
console.log(Object.keys(tinderUser)) //convert into array and give only the keys of the object
console.log(Object.values(tinderUser))  //give only the values of object in array form
console.log(Object.entries(tinderUser)) //it convert key-value pair into different arrays
console.log(tinderUser.hasOwnProperty('isLoggedIn'))//to check if the property exists in the object or not
console.log(tinderUser.hasOwnProperty('age'))


//Object Destructure: Makes the code clean
//another way to get key of an object like i want to get name of obj "tinderuser" 
//i can use this way too

const course ={
  CourseName : "JS Hindi",
  Instructor: "Histesh",
  Price: "999"
}         
        //key      //object
const {Price}  = course
const{Instructor} = course  //Destructring
console.log(Instructor)
console.log(Price) //now just use the key name to print the value