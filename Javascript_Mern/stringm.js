//Method: to perform some action

//1.Trim(): if we want to remove extra spaces from both ends(start or end) of a string
//but not from the middle only from both ends and returns a new string.
//It does not make changes in the org. string but returns a new string
let msg = "     Hello     ";
console.log(msg.trim()); //whitespaces removed
console.log(msg);

//from an input
// let password = prompt("Set your password");
// console.log(password.trim()) //print with no spaces

//2. .touppercase(): it transform all character of the string in uppercase
let str = "samia ahmed, hello, how are u";
console.log(str.toUpperCase()); //create a new string, not change the org string.
//3. .tolowercase(): it transform all character of the string in lowercase
console.log(str.toLowerCase());

//Methods with arguments
//1. indexof(): it takes a substring (a part of a str)/letter and returns first index of occurence.
let msg2 = "ILoveCodingggggg";
console.log(msg2.indexOf("g")); //gives first index(where it occurred first) of g
console.log(msg2.indexOf("Love"));

//Method Chaining: Use multiple methods on a string 
//we'll use trim() and uppercas() here
let message = "               Hello Samia           ";
let message2 = message.trim().toUpperCase(); //called method chaining
console.log(message2);
console.log(message)

//2. Slice() : it returns a part of the orginal string as a new string.
//You write starting index and ending index
//you can also write only starting index so it will assume the E.I would be string total length
let m1 = "HelloEverybody!"
console.log(m1.slice(1,8)); //8 index is not included
//ending index will be 7, E.I is not included, you always write +1

//3. replace(): it searches for a value, then replace it with a new value and return a new str.
let air = "I Love Colombia";
console.log(air.replace("Colombia","London")); 
console.log(air.replace("o","x")); //only replace the first occurence

//4.repeat: it returns the copies of a str, we pass the count (how many copies) as arg.
console.log(air.repeat(4));

//Practice Qs
let ms = "help!";
console.log(ms.trim().toUpperCase());
let m ="ApnaCollege";
console.log(m.slice(4).replace("l","t"));
//used slice() to separate college 