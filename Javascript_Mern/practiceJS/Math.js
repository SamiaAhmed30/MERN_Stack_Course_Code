//Q1-2
// let num1 = Number(prompt("Enter number 1: "));
// let num2 = Number(prompt("Enter number 2: "));
// let sum = num1 + num2;
// let subt = num1 - num2;
// let prod = num1 * num2;
// let div = num1 / num2;
// let mod = num1 % num2;
// document.write(`Sum of ${num1} and ${num2} is : ${sum} <br>
// Difference of ${num1} and ${num2} is : ${subt} <br>
// Product of ${num1} and ${num2} is : ${prod}<br>
// Div of ${num1} and ${num2} is : ${div}<br>
// Mod of ${num1} and ${num2} is : ${mod}`);

//Q3
let a ;
console.log("Value after variable declaration is:" ,a)
a = 16;
console.log("Initial value: ", a);
console.log("value after increment is: ", ++a) //increment
a = a+7; //add 7 to the variable and update value of a
console.log("value after addition is: ", a) 
console.log("value after decrement is: ", --a) //decrement
a =a%3;
console.log("The remainder is: ",a)

//Q4
const ticket = 600;
let total = 600 *5;
console.log(`The cost of buying 5 movie ticket is ${total}PKR`)

//Q5
for(let i=10; i <=100; i=i+10){
    console.log(i)
}

//Q6
let celc = 25;
let fah = (celc * 9/5) +32;
console.log(`${celc} in fahrenheit is ${fah} `)
let fh = 70;
let cl = (fh - 32) *(5/9)
console.log(`${fh} in C is ${cl} `)

//Q7
let price1 =650
let q1 = 3
let price2 = 100
let q2 = 7
let shipping = 100
let totalcost = (price1*q1)+(price2*q2) +shipping
console.log(`Price of item 1: ${price1} and Ordered Quantity: ${q1}`);
console.log(`Price of item 2: ${price2} and Ordered Quantity: ${q2}`);
console.log("Shipping Charges:",shipping);
console.log("Total Cost of your order: ",totalcost)

//Q8
let totalmarks = 980;
let marksobt = 804;
let percentage = (marksobt/totalmarks)*100;
console.log("Total Marks: ",totalmarks)
console.log("Marks obtained: ",marksobt)
console.log("Percentage: ",percentage);

//Q9
let USD = 10*104.80; //conversion from usd to pkr
let SDR = 25*28;
let pkr = USD + SDR;
console.log("Total Currency in PKR: ",pkr)

//Q10
let num = 10;
let res = ((num + 5) * 10 )/ 2;
console.log("Result: ", res)

//Q11
let currentYear = 2025;
let BirthYear = 1995;
let age = currentYear - BirthYear
let age2 = age - 1; //we dont know if their birthday has passed, so they could be a year younger
console.log("Current Year: ",currentYear)
console.log("Birth Year: ",BirthYear)
console.log(`They are either ${age} or ${age2} years old`)

//Q12
let radius = 20;
let cirf = 2 * 3.142 * radius;
let area = 3.142 * radius **2;
console.log("Radius: ", radius)
console.log("Circumference of a Circle: ",cirf)
console.log("Area of a circle: ",area)

//Q13
let snack = "Chocolate";
let curAge = 25;
let maxAge = 50;
let Amount = 2;
let totalamount = curAge * Amount;
console.log(`You will need ${totalamount} ${snack} to last you until the ripe old age of ${maxAge}`)

//Q14
let b = 15;
console.log("the value of b is: ",b)
console.log("the value of ++b is: ",++b)
console.log(b)
console.log("the value of b++ is: ",b++)
console.log(b)
console.log("the value of --b is: ",--b)
console.log(b)
console.log("the value of b-- is: ",b--)
console.log(b)


//Q15
let name = prompt("enter your name")
alert(`Hi ${name}! Welcome to the Website!`)

//Q16
let sub1 = prompt("Enter subject 1 name:")
let sub2 = prompt("Enter subject 2 name:")
let sub3 = prompt("Enter subject 3 name:")
let totalM = 100;
let ob1 = Number(prompt(`Enter Obtained marks for ${sub1}`))
let ob2 = Number(prompt(`Enter Obtained marks for ${sub2}`))
let ob3 = Number(prompt(`Enter Obtained marks for ${sub3}`))
let TM = totalM * (3);
let OBT = (ob1 + ob2 + ob3)
let prnt = (OBT/TM) * 100
let showresult = confirm("Do you want to see your Result?")
if(showresult){
alert(
    `Total marks ${TM}\n`+
    `Obtained Marks ${OBT}\n` +
    `Percentage ${prnt}%`);

}
else{
    alert("OK! You donot want to see results now!")
}

//q8
let at = 2;
let bt = at++ + ++at - --at + at--;
console.log("Variable a: ",at)
console.log("Variable b: ",bt)