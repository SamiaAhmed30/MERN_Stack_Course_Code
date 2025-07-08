//Q1

let num = 73;
if (num % 10 === 0) {
  console.log("good");
} else {
  console.log("bad");
}

//Q2
let name = prompt("Enter your name: ");
let age = prompt("Enter your age: ");
alert(`${name} is ${age} years old.`);

//Q3
let months = 1;
switch (months) {
  case 1:
    console.log("January,February,March");
    break;
  case 2:
    console.log("April,May,June");
    break;
  case 3:
    console.log("July,August,September");
    break;
  case 4:
    console.log("October,November,December");
    break;
}

//Q4: golden string
let str = "August";
if ((str[0] === "a" || str[0] === "A") && str.length > 5) {
  console.log("It is a golden string");
} else {
  console.log("It is not a golden string");
}
//Q5: find the largest of three numbers
let a = 100;
let b = 18;
let c = 150;
if (a > b) {
  if (a > c) {
    console.log(`${a} is the Largest!`);
  } else {
    console.log(`${c} is the Largest!`);
  }
} else {
  if (b > c) {
    console.log(`${b} is the Largest!`);
  } else {
    console.log(`${c} is the Largest!`);
  }
}

//Q6 : check if these 2 numbers have the same last digit
//The modulo operation (% 10) is commonly used to extract the last digit of a number.
let num1 = 32;
let num2 = 47852;
if((num1%10)===(num2%10)){
    console.log("Both have the same last digit ",num1%10);
}
else{
    console.log("no, they dont")
}
