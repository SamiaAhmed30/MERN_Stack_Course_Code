//Q1
function printDate(){
let date = new Date();
console.log(date.toString())
}
printDate();

//Q2
function greet(firstname,lastname){
    console.log(`Welcome ${firstname} ${lastname}!`)
}
greet("Samia","Ahmed")

//Q3
function addTwoNumber(){
    let n1 = Number(prompt("Enter number 1: "))
    let n2 = Number(prompt("Enter number 2: "))
    return n1 + n2;
}
console.log(addTwoNumber())

//Q4
function calculator(num1,num2,operator){
    if(operator==="+"){
        return num1+num2;
    }
    else if(operator==="-"){
        return num1-num2;
    }
    else if(operator==="*"){
        return num1*num2;
    }
    else if(operator==="/"){
        return num1/num2;
    }
}
const result = calculator(10,10,"+")
console.log(result)

//Q5
function square(n){
    console.log(Math.pow(n,2))
}
square(6)

//Q7
function counting(){
    let n1 = Number(prompt("Enter staring number: "))
    let n2 = Number(prompt("Enter ending number: "))
    for(let i = n1; i<=n2; i++){
        console.log(i)
    }
}
counting()

//Q9
function calculateArea(width,height){
    let area = width*height;
    console.log(`Area is: ${area}`)
}
calculateArea(20,30)

//Q14
function calcCircumference(radius){
    const circumference = 2*(Math.PI)*radius;
    console.log("The circumference is: ",circumference)
}
function calcArea(radius){
    const area = Math.PI * Math.pow(radius,2)
    console.log("The Area is: ",area)
}
calcCircumference(10)
calcArea(16)

//Q15
function greetingUser(name){
    console.log(`Hello ${name}`)
}
greetingUser("Samia")

//Q16
function strlength(str){
    console.log(`String length: ${str.length}`)
}
strlength("Samia Ahmed")

//Q17
function checkNum(n){
    if(n%2===0){
        console.log("Even number")
    }
    else{
        console.log("Odd number")
    }
}
checkNum(4)

//Q18
function findMax(n1,n2,n3){
    console.log(Math.max(n1,n2,n3))
}
findMax(4,10,80)

//Q19
