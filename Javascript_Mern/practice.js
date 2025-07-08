//Traffic Light
color = "red";

if(color==="red"){
    console.log("STOP!");
}
else if(color==="yellow"){
    console.log("Ready");
}
else if(color==="green"){
    console.log("GO");
}

//Popcorn price

// let size = prompt("Enter Popcorn size: ");
// if(size === "XL"){
//     console.log("Price is Rs.250 ");
// }
// else if(size === "L"){
//     console.log("Price is Rs.200");
// }
// else if(size === "M"){
//     console.log("Price is Rs.100");
// }
// else {
//     console.log("Price is Rs.50");
// }

//Nested if else
let marks = 56;
if(marks >=33){
    console.log("Pass");
      if(marks >=80){
        console.log("Grade: O")
      }
      else{
        console.log("Grade: A")
      }
}
else {
    console.log("Better Luck next time");
}

//Logical operator
//1. && (and ) both condition need to be true
let score = 95;
if(score >= 33 && score >=80){
    console.log("Pass");
    console.log("A+")
}
//2. || (OR) if either of the condition is true, then ans will be true
if(score >= 33 || score >=80){
    console.log("Pass");
    console.log("A+")
}
//3. !--> not operator: it reverses the final answer

//Qs: check if it is a good string which starts with 'a' and length is > 3

let letter = 'samia';

if((letter[0]==='a') && (letter.length > 3)){
   console.log("It is a Good String!")
}
else{
    console.log("Not a good string")
}

//Qs 2:
let num = 12;
if((num%3 ===0 ) && ((num +1 == 15) || (num -1 == 11))) //BODMAS rule is applied,
// brackets solve first adn for multiple operators, solve from left to right
    {
        console.log("Safe");
    }
    else{
        console.log("Unsafe");
    }