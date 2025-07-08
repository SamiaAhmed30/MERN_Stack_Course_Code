// Dates
//it will print today's date
let myDate = new Date(); //date obj
// console.log(myDate) //output not readable
console.log(myDate)
//convertion to make them readable
console.log(myDate.toString())  //print both date and time in readable form
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toDateString()) //best 
console.log(myDate.toLocaleString())//2nd best

//if i want a specific date not instant date
// let myCreatedDate = new Date(2023, 1, 16); //pass the date here which you want to get
// console.log(myCreatedDate.toDateString())
//if you want to print specific time also with that 
// let myCreatedDate = new Date(2023, 1, 16,11,55); //new format with time 

let myCreatedDate = new Date("2023-02-16") //in yy-mm-dd format
console.log(myCreatedDate.toLocaleString())

//Time stamps
let TimeStamp = Date.now(); //in milliseconds
console.log(myCreatedDate.getTime());// time in milliseconds 
//now compare these two
console.log(TimeStamp)
//convert in seconds
console.log(Math.floor(Date.now()/1000));

//some new methods of date
let dt = new Date();
console.log(dt.getFullYear())
console.log(dt.getMonth())