//q1
let num = prompt("Enter a positive integer: ") //string
console.log("Number: ",Number(num)) //number
console.log("Round off: ",Math.round(num))
console.log("Floor: ",Math.floor(num))
console.log("Ceil: ",Math.ceil(num))

//q2
let n = prompt("Enter a negative floating number : ") //string
console.log("Number: ",Number(n)) //number
console.log("Round off: ",Math.round(n))
console.log("Floor: ",Math.floor(n))
console.log("Ceil: ",Math.ceil(n))

//q3
let t = Number(prompt("Enter a number: "))
console.log(`Absolute value of ${t} is : ${Math.abs(t)}`)

//q4
let r = Math.floor(Math.random()*6)
console.log(`Random dice value: ${r}`)

//q5
let ran = Math.floor(Math.random() * 100) + 1;
console.log(`Random number between 1 to 100: ${ran}`);

//q6
let input = prompt("Enter your Weight: ")
let weight = parseFloat(input)
console.log("Your weight is : ",weight)

//q7
let secret = Math.floor(Math.random()*10)+1;
let guess = Number(prompt("Guess my secret number from 1 - 10: "))
if(guess===secret){
    console.log("Congrats! You guessed it")
}
else {
    console.log("Try again!")
}

//q8
console.log(Math.floor(Math.random()*100)+1) //1-100 range
console.log(Math.floor(Math.random()*5)+1)    //1-5 range
console.log(Math.floor(Math.random()*5)+21)    //21-25 range

//q9
const nt =prompt('Enter the ending range: ');
const random = Math.floor(Math.random()*nt)+1;
let gs = prompt("Enter the random number: ")
while(true){
    if(gs==="quit"){
        alert("Quit");
        break;
    }
    const gt = parseInt(gs)
    if(parseInt(gt)===random){
        console.log("Congrats you are right!!!random num was ",random)
        break;
    }
    else if(gt<random){    //hints 
       gs =  prompt("hint: You guess was too small please try again: ")
    }
    else{
         gs =  prompt("hint: You guess was too large.please try again: ")
    }
}
//q10
const dice = Math.floor(Math.random()*6)+1;
console.log("Dice : ",dice)

