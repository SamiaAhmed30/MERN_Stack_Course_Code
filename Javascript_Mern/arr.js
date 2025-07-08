//Write a JavaScript program to get the first n elements of an array.
//[n can be any positive number]. For example: for array [7, 9, 0,-2] and n=3 Print, [7, 9, 0]

let ar = [7, 9, 0, -2];
let n = 3;
console.log(ar.slice(0, n));
// Write a JavaScript program to get the last n elements of an array.
//[n can be any positive number]. For example: for array [7, 9, 0,-2] and n=3 Print, [9, 0,-2]
console.log(ar.slice(-3));

//Write a JavaScript program to check whether a string is blank or not.
let newstr = prompt("input an string");
if(newstr.length == 0){
    console.log("string is empty")
}
else{
    console.log("string is not empty")
}
//Write a JavaScript program to test whether the character at the given
//(character) index is lower case.

let abc = "SAmia Ahmed";
let ind = 4;
if (abc[ind] == abc[ind].toLowerCase()) {
  console.log("The character is lower case");
} else {
  console.log("The character is upper case");
}

//Write a JavaScript program to strip leading and trailing spaces from a string.

let pic = prompt("input an string");
let ans = pic.trim();
console.log(pic.trim());

//Write a JavaScript program to check if an element exists in an array or not.
let ns = ["hello", 4, 7, "S", 43, 65];
let item = 8;
if (ns.indexOf(item) != -1) {
  console.log("item exists in an array");
} else {
  console.log("item doesnot exists in an array");
}

//for each loop 
//when you apply this loop on array, it prints array value, its index no and full array
let a = [1, 2, 4, 8, 6];
a.forEach((value, index, arr) => {
  console.log(value, index, arr);
});
