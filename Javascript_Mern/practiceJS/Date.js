//q1
let date = new Date();
console.log(date.toString())

//q2
const Month =["January","February","March","April","May","June","July","August","September","October","November","December"];

let d = new Date()
alert(`Current Month: ${Month[d.getMonth()]}`)

//q3
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let h = new Date()
let s = h.getDay();// getDay() returns 0 (Sunday) to 6 (Saturday)
console.log(days[s])
if(s===6||s===0){
    console.log("Its a Fun Day!")
}

//q4
const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
 let t = new Date()
 console.log(`Today is ${weekday[t.getDay()]}`)

//q5
let c = new Date();
let z = c.getDate() //get todays date
if(z<16){
    alert("First Fifteen Days of the Month!")
}

else{
    alert("Last days of the month")
}
//q6
let a = new Date();
let minutes = Math.round(a.getTime()/(1000*60))
console.log("Minutes since Jan 1, 1970:",minutes)

//q7
let x = new Date();
let v = x.getHours(); //extracts just the hour from the current time.
//If it is (from 0 to 11), it's before noon → AM.
//Otherwise (12 to 23), it's after noon → PM.
if(v <12){
    alert("Its AM")
}
else{
   alert("Its PM") 
}

//q8
let age = Number(prompt("Enter your age: "));
let b = new Date();
let currentYear = b.getFullYear() //get the current year
let birthyear = currentYear - age;
console.log(`Your age is: ${age}`)
console.log(`Your Birth Year is: ${birthyear}`)

//q9
console.log("K-Electric Bill")
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let Customername = "Samia Ahmed";
let CurrentMonth = month[new Date().getMonth()];
let Numberofunits = 410;
let chargesperunit =16;
let NetAmountPayable = Numberofunits * chargesperunit;
let LatePaymentSurcharge =350;
let GrossAmountPayable =  NetAmountPayable + LatePaymentSurcharge;

console.log("Customer Name: ",Customername);
console.log("Current Month: ",CurrentMonth);
console.log("Number of Units: ",Numberofunits);
console.log("Charges Per Unit: ",chargesperunit)
console.log("Net Amount Payable (within Due Date): ",NetAmountPayable);
console.log("Late Payment Surcharge: ",LatePaymentSurcharge);
console.log("Gross Amount Payable (after Due Date): ",GrossAmountPayable);
