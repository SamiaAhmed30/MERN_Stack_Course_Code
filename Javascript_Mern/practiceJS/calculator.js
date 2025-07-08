console.log(`Operators:
    1.Add
    2.Subtract
    3.Multiply
    4.Divide`)
    
while (true) {
let choice = prompt("Enter the Operator or Quit to exit: ")
if (choice.toLowerCase() === "quit") {
    console.log("Quitting the app...");
    break;
  }
else if(choice==="1"){
    Add()
}
else if (choice==="2"){
    Subtract()
}
else if (choice==="3"){
    Product()
}
else if (choice==="4"){
    Divide()
}
else{
     console.log("Invalid Option!")
}
}
function getTwoNumbers(){
    let num1 = Number(prompt("Enter Number 1: "))
    let num2= Number(prompt("Enter Number 2: "))
    return [num1,num2]
}
function Add(){
    let [num1,num2] = getTwoNumbers()
    console.log(`Result of ${num1} and ${num2} is: `,num1+num2)
}
function Subtract(){
    let [num1,num2] = getTwoNumbers()
    console.log(`Result of ${num1} and ${num2} is: `,num1-num2)
}
function Product(){
    let [num1,num2] = getTwoNumbers()
    console.log(`Result of ${num1} and ${num2} is: `,num1*num2)
}
function Divide(){
    let [num1,num2] = getTwoNumbers()
   if(num2 === 0){
       console.log("Error!Cannot Divide By Zero")
   }
   else{
    console.log(`Result of ${num1} and ${num2} is: `,num1/num2)
   }
}
