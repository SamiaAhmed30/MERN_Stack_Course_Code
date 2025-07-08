//Q1
let city = prompt("Enter your city:")
if(city == "karachi" || city == "KARACHI"){
    alert("Welcome to the city of Lights!")
}
else{
    alert("welcome user!")
}
//Q2
let gender = prompt("Enter Gender: ")
if(gender=="Male"){
    alert("Good Morning Sir!")
}
else if(gender=="female"){
    alert("Good Morning Ma'am!")
}
//Q3
let traffic = prompt("Enter color of Traffic Light:")
if(traffic== "red"){
    alert("Must Stop!")
}
else if(traffic=="yellow"){
    alert("Ready to move")
}
else if(traffic=="green"){
    alert("Move now!")
}
//Q4
let fuel = Number(prompt("Enter Remaining Fuel in literes:"))
if(fuel<0.25){
    alert("Please refill the fuel in your car")
}
else{
    alert("you are good to go!")
}
//Q5
let phy = Number(prompt("Enter Obtained marks in Phy:"))
let chem = Number(prompt("Enter Obtained marks in Chemistry:"))
let sci = Number(prompt("Enter Obtained marks in Science:"))
let total = Number(prompt("Enter Total marks:"))
let obt = phy+chem+sci;
let percentage = (obt/total)*100;
document.write("Total Marks:",total);
document.write("Obtained Marks:",obt);
document.write("Percentage:",percentage);
if(percentage>=80){
    document.write("Grade A-one\n");
    document.write("Remarks: Excellent")
}
else if(percentage>=70){
    document.write("Grade A\n");
    document.write("Remarks: Good")
}
else if(percentage>=60){
    document.write("Grade B\n");
    document.write("Remarks: You need to improve!")
}
else if(percentage<60){
    document.write("Grade F\n");
    document.write("Remarks: Sorry!")
}

//Q6
let sec_no = 16;
let guess = prompt("Guess the secret number:")
if(guess==sec_no){
    alert("Bingo! Correct answer")
}
else if(guess == sec_no + 1){
    alert("Close Enough to the correct answer!")
}
else{
    alert("Sorry! Wrong guess")
}
//Q7
let n = prompt("Enter a number to check if it is div by 3:")
if(n%3==0){
    alert(`${n} Is divisible by 3`)
}
else{
    alert(`${n} Is not divisible by 3`)
}
//Q8
let num = Number(prompt("Enter a number to check odd/even"));
if(num%2==0){
    alert(`${num} is an even number!`)
}
else{
    alert(`${num} is an odd number!`)
}
//Q9
let temp = prompt("Enter Temperature")
if(temp>40){
    alert("It is too hot outside.")
}
else if(temp>30){
    alert("The Weather today is Normal.")
}
else if(temp>20){
    alert("Today\'s Weather is cool.")
}
else if(temp>10){
    alert("OMG! Today\'s weather is so Cool.")
}
//Q10
let n1 = Number(prompt("enter number 1"))
let n2 = Number(prompt("enter number 2"))
let op = prompt("Enter operator(+,-,*, / & %)")
if(op == "+"){
    let sum = n1 + n2
    alert(`Sum is ${sum}`)
}
else if(op == "-"){
    let subt = n1 - n2
    alert(`Difference is ${subt}`)
}
else if(op == "*"){
    let pro = n1 * n2
    alert(`Product is ${pro}`)
}
else if(op == "/"){
    let Div = n1 / n2
    alert(`Div is ${Div}`)
}
else if(op == "%"){
    let rem = n1 % n2
    alert(`Remainder is ${rem}`)
}
else{
    alert("Invalid operator! Please enter +, -, *, /, or %.")
}
//Q11
let c = prompt("Enter a single character:")
let ascii = c.charCodeAt(0) // Get ASCII code of character
if(ascii >= 48 && ascii <= 57){
    alert("Its a number!")
}
else if(ascii >= 65 && ascii<= 90){
    alert("Its an uppercase letter")
}
else if(ascii >= 97 && ascii<= 122){
    alert("Its an Lowercase letter")
}
else {
    alert("It is neither a number nor an English letter.");
}
//Q12
let s = Number(prompt("Enter number 1"))
let t = Number(prompt("Enter number 2"))
if(s>t){
    alert(`${s} is greater than ${t}`)
}
else if (s == t){
    alert(`${s} is equal to ${t}`)
}
else{
    alert(`${t} is greater than ${s}`)
}
//Q13
let abc = Number(prompt("Enter n"))
if(abc>0){
    alert(`${abc}is a positive number`)
}
else if(abc === 0){
    alert(`${abc} is equals to zero`)
}
else{
    alert(`${abc} is a negative number`)
}
//Q14
let d = prompt("Enter a characterfrom a - z");
if (d == "a" || d == "e" || d == "i" || d == "o" || d == "u") {
  alert(true)
}
else {
  alert(false)
}
//Q15
let password = "hello123";
let p = prompt("Enter your password:")
if(!p){
  alert("Please enter your password");
}
else if(p===password){
  alert("Correct! The password you entered matches the original password.")
}
else {
  alert("Incorrect Password!")
}
//Q16
let time = Number(prompt("Enter time in 24 hour format"))
if(time>=0 && time <1200 ){
  alert("Good Morning!")
}
else if (time >=1200 && time < 1700)
{
  alert("Good afternoon!")
}
else if(time>=1700 && time<2100){
  alert("Good Evening!")
}
else if(time>=2100 && time<=2359)
{
  alert("Good Night!")
}


