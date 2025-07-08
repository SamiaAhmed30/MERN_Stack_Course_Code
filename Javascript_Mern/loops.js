// to perform an action again and again, we use loops
//For Loop
//print num 1 to 10 using for loop
// for (let i = 1; i<=10;i++){
//     console.log(i);
// }
//backward loop
// for (let i = 5; i>= 1; i--){
//     console.log(i);
// }
//print all odd number from 1 to 15
for(let j = 1; j<=15; j = j+2){
    console.log(j)
}
//backwards

for(let i =15; i>=1; i = i-2){
    console.log(i)
}
console.log("Even numbers")
for(let j = 2; j<=10; j = j+2){
    console.log(j)
}
//Table of 5
for(let i =5; i <=50; i = i+5){
    console.log(i);
}
//Table of 3
for(let i =3; i <=30; i = i+3){
    console.log(i);
}
//print table from user input
let j = parseInt(prompt("Enter a number you want to print Table of: "));
for(let i =j; i <=j*10; i = i+j){
    console.log(i);
}