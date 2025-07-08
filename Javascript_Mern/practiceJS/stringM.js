//Q1
let firstname = prompt("Enter First Name: ");
let lastname = prompt("Enter Last Name: ");
let fullname = firstname.concat(" "+ lastname);
alert(`Welcome ${fullname}, to our Website`);

//q2
let fav = prompt("Enter your Favourite Mobile Phone Brand: ")
let lengthOfBrand = fav.trim().length
console.log(`Length of string`,lengthOfBrand)

//q3
let str = "Pakistani"
console.log(str)
console.log("Index of n: ",str.indexOf("n"))

//q4
let str2 = "Hello World"
console.log(str2)
let last = str2.lastIndexOf("l"); //it find the last index(last occ) of any char in string
console.log("Last Index of L:",last)

//q5
let s = "Pakistani";
console.log(s);
let pos = s.charAt(3) //it returns the char present at that index no
console.log("Character at Index 3:",pos)

//q6
let city = "Hyderabad";
console.log(city)
let newcity = city.replace("Hyder","Islam"); //it replace the first occ of the word
console.log("City after Replacement: ",newcity)

//q7
var message = "Ali and Sami are best friends. They play cricket and football together.";
console.log(message)
let m = message.replace(/and/g,"&") //it replace all "and" in the sentence with "&"
console.log(m)

//q8
let  ns = "472"
console.log(ns)
console.log("Type of: ",typeof(ns));
let nn = Number(ns)
console.log(nn)
console.log("Type of: ",typeof(nn));

//q9
let inp = prompt("Enter: ");
let unp = inp.toUpperCase() //uppercase convert
console.log(unp)

let ing = prompt("Enter: ");
let ung = ing.toLowerCase() //lowercase convert
console.log(ung)


//q10
let num = 35.36
let st = String(num).replace(".","")
console.log(st)

//q11
let username = prompt("Enter Username: ");
if(username.includes("!")|| username.includes("@") || username.includes(".") || username.includes(",") ){
    console.log("Please enter a valid Username")
}
else{
    console.log(`Welcome ${username}`)
}
//includes() checks all the character of the string or all elements of the array

//q12
let A= ["applepie","cake","cookie","chips","patties"];
let search = prompt("What do you want to order: ")
let stg = search.toLowerCase();
let index = A.indexOf(stg);
if(index !== -1){
    console.log(`${stg} is available at index ${index}`);
}

else{
    console.log(`Sorry! ${stg} is not available`)
}

//q13
let university = "University of Karachi" //convert this string to an array
let arr =university.split("");
for(let i = 0; i<arr.length; i++){
console.log(arr[i])
}


let str1 = "samia";
for(let i=0; i<str1.length; i++){
    console.log(str1[i])
}

//q14
let un = prompt("Enter: ");
console.log(un.charAt(un.length-1)) //finds the char at the given index

