//Want to add variables in a string

let pencilPrice = 10;
let eraserPrice = 5;
total = pencilPrice + eraserPrice;
// console.log("Total price is: ",total,"Rupees")

//Template literals: if you want to write long strings and add variables in b/w 
//and write in different lines
output = `Total price is ${total} Rupees`; //back ticks
console.log(output)

//Arithemetic operators: it has 2 operands(to which the operation will be performed)

let a = 10; //operands
let b = 5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

//Unary Operators: it has 1 operand
console.log(a++) //10 --> 11 first print then incr
console.log(++a)//12 first inr then print

//Comparison operator: 
str ='123';
n = 123;
console.log(n == str) //compares only value not data type
console.log(n === str) //compares value and data type

//Comparison for non-numbers:

console.log ('a' > 'A'); //unicodes are used for comparison

//confirm : yes or no choice prompt
let abc = confirm("Do you want to grow?")
if (abc){
    console.log("You want to grow")
}
else{
    console.log("You donot want to grow")
}