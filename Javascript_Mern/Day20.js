//This keyword: it refers to the object in which it is used./ in current piece of code
//In JavaScript, its value can change depending on how a function is called.

let student = {
    name : "Samia Ahmed",
    age: 20,
    eng : 95,
    math : 90,
    phy : 97,
    getAvg(){
        //the function cannot access the properties of the object directly, so we use "this" keyword to access
        //the properties of the object
        let avg = (this.eng + this.math + this.phy)/3 //this is used to access the properties of the object
        // console.log(this) //here "this" is student object
        console.log(`${this.name} got average marks of: ${avg}`)
    }
}
// console.log(student.getAvg()) 

function dothis(){
// console.log(this) //here "this" is window object
//whenever we create a function normally(without the object),there "this" by default is the window object
}

const person = {
    name : "Emma",
    age: 25,
    city: "NYC",
    printDetails(){
        console.log(`HI I am ${this.name}, i live in ${this.city} and I am ${this.age} years old.`)
        //here "this" refers to the object Person
    }
}
// console.log(person.printDetails())


//Try and Catch: they are pair of statements that are used to handle errors in JavaScript.  
//Try: tests the code whether it has error or not when it runs.
//Catch: if an error occurs, it catches the error and executes the code inside the catch block.
console.log("Start of the program")
console.log("Hello")
try{
    console.log(a) //trial code, it will throw an error because 'a' is not defined
}catch(error){
    console.log("Error! a is not defined!")
    console.log(error) //it will print the error 
}
console.log("End of the program")

const power = (a,b)=>{
    return Math.pow(a,b)
}
console.log(power(2,4))