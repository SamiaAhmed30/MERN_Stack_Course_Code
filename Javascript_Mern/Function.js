//Block of code that perfoms a specific task .You can reuse it whenever you want 
// by just calling it by name. reusable code

//Function Define
function hello(){
    console.log(`Hello Samia`)
    let sum = 4+5;
    console.log(sum)
}
function PrintName(){
    console.log("Samia Ahmed")
}
function Print1to5(){
    for(let i =1; i<=5; i++){
        console.log(i)
    }
}
function isAdult(){
    let age = 14;
    if(age <18){
        console.log("Minor")
    }
    else{
        console.log("Adult")  
    }
}
function add(num1,num2){ //Parameters
        console.log(num1+num2)
    
}
function sumA(n1,n2){
    let result = n1 + n2; 
    return result //it returns the value of sum 
    //After return, no code works in function
}

//Function Calling or use the function
hello();  //execution /calling
Print1to5();
PrintName();  
isAdult();
isAdult //Reference
add(5,5) //function with arguments
let result = sumA(7,8)   //When you return a value from func, store it in a variable 
console.log("Result: ",result) 

function userLoggedIn(username){
    if(!username){ //means user didnot enter anything
          console.log("Please enter a username! ")
    }
    return `${username} just Logged In!`
}
let un = userLoggedIn("Samia Ahmed") //function call and  then return value stored in variable
console.log(un) //print value

function PrintPoem(){
    console.log(`The doctor tells her what she can't eat
no grains no nuts no beans no sugar a tomato is OK
but no skins no seeds what's left
my mother says when she calls me`)
}
PrintPoem();

function rollDice(){
    let dice = Math.floor(Math.random()*6)+1;
    console.log("Dice",dice)
}
rollDice();

//Arguments: value we pass to the functions

function user(name){ //argument in the form of variable
    console.log(name)
}
user("Sam"); //value pass it will store in the variable name

function PrintInfo(name,age){
    console.log(`Hi i am ${name} and my age is ${age}`)
}
PrintInfo("Tae",28)


function PrintTable(n){
    for(let i =n; i<=n*10; i=i+n){
        console.log(i)
    }
}
PrintTable(5)

//Return keyword: it is used to return some value from the function e.g sum,name,city etc
function newSum(a,b,c){
    let sum = a+b+c;
    return sum;
}
let sum =newSum(5,7,8);
console.log(sum)

function sum1toN(n){
    let sum =0;
   for(let i = 1; i<=n;i++){
      sum +=i;
   }
   return sum;
}
let s = sum1toN(10)
console.log(s)


let str = ["Hello","hi","bye","!"]
function concat(str){
    let res="";
    for(let i =0; i<str.length; i++){
        res += str[i]
    }
    return res;
}
console.log(concat(str));

let st = 56; //Global scope variable

function average(a,b,c){
    let avg = (a+b+c)/3;  //Function  scope variable
    console.log(avg)
}

average(3,5,9)

{  //Block scope: cannot access these outside this block
    let age = 34;
    let name ="Samia"
 }
 //console.log(age) //error

 function outerfunc(){
    let x =5;
    let y =10;
    function innerfunc(){  //nested function  
        console.log(x)        //function scope
    }
    innerfunc();
 }
 outerfunc();

 let greet = "Hello";  //global scope
 
 function changeGreet(){
    let greet = "Marhaba"; //function scope
    console.log(greet);  
    
    function innergreet(){
        console.log(greet);  //lexical scope
    }
 }

 console.log(greet) //hello
 changeGreet() //marhaba

 //Function expression: another way to write functions
 let r = function(a,b){
    return a+b;         //function exp
 }
 console.log(r(80,90))

 let hello1 = function(){ //nameless func but called by variable name
    console.log("Hello!")
 }
hello1() 

hello1 = function(){
    console.log("Hi!") //change value of variable hello1 from hello to hi
}
hello1()

//High Order Function: 
//takes one or multiple function as arguments


//I created a shopping cart and i pass cart items in variables, but i dont know how many items user will add in cart
//so i am using rest operator , so user jitne bhi item add kre 500,1000 wo sb sirf aik varibale 
// m store hojaein and phir return krdein in form of array
//it is possible with rest operator
function calculateShoppingCart(...num){  //rest op
    return num

}
console.log(calculateShoppingCart(65,23,1321,786,56)) //it stores all of them in var num and convert and print them into array

//I want to pass an object to a function
let course ={
    Instructor: "Apna College",
    Price: "999",
    Name: "JS Course"
}

function HandleObject(anyObject){ //variable to pass object
       console.log(`Instructor is ${anyObject.Instructor} , Price is ${anyObject.Price} and Course Name is ${anyObject.Name}`)
}
console.log(HandleObject(course))

//Pass Array in function

const newArray = [56454,87,34,2421,98]
const arr = [1,2,3,4,6,7,9,0]
//define a function that accept array and return it's second value
function returnSecondValue(getArray){  //var to pass array
         return getArray[3]
}
console.log(returnSecondValue(arr))

//Methods
const calculator = {
    add:function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    },
    mul:function(a,b){
        return a*b;
    }
}
console.log(calculator.sub(7,8))

//Another way to define methods , called shorthand method
const calc = {
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    }
}